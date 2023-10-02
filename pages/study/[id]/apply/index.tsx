import styles from "@/styles/pages/Study.module.sass";
import StudyDetailCollapseBoard from "@/components/apply/StudyDetailCollapseBoard";
import TimeTable from "@/components/apply/TimeTable";
import { getStudyApply } from "@/controllers/study/controller";
import { StudyApply } from "@/controllers/study/types";
import { InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import { useState } from "react";
import { useForm } from "react-hook-form";
import appGetServerSideProps from "@/apis/appGetServerSideProps";
import useApplyFormMutation from "@/queries/useApplyFormMutation";

type Params = {
  id: string;
} & ParsedUrlQuery;

export const getServerSideProps = appGetServerSideProps<{
  data: StudyApply;
}>(async ({ params }) => {
  const { id } = params as Params;
  const data = await getStudyApply(Number(id));

  return { props: { data } };
});

type FormData = Record<string, string>;

type Day = "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";

const convertNumberToTimeFormat = (fl: number) => {
  const minutePerHour = 60;
  const integer = Math.trunc(fl);
  const decimalPoint = fl - integer;

  const hour = `${integer}`.padStart(2, "0");
  const minute = `${Math.trunc(minutePerHour * decimalPoint)}`.padStart(2, "0");

  return `${hour}:${minute}`;
};

const formatQuestionInput = (answers: FormData) =>
  Object.entries(answers).map(([id, ans]) => ({
    questionId: Number(id),
    text: ans,
  }));

const formatAvailableTimeInput = (
  availableTimes: Record<Day, number[]>,
  timeStep: number,
): { day: Day; starttime: string; endtime: string }[] => {
  const filteredTimes = Object.entries(availableTimes)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, selected]) => selected.length !== 0)
    .map(([day, selected]) => {
      const formatted = selected.map(time => ({
        starttime: time,
        endtime: time + timeStep,
      }));
      return [day, formatted] as const;
    });

  const timeFrames = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const [day, formatted] of filteredTimes) {
    let start = formatted[0].starttime;
    for (let i = 1; i < formatted.length; i += 1) {
      if (formatted[i].starttime !== formatted[i - 1].endtime) {
        timeFrames.push({
          day,
          starttime: start,
          endtime: formatted[i - 1].endtime,
        });
        start = formatted[i].starttime;
      }
    }
    timeFrames.push({
      day,
      starttime: start,
      endtime: formatted[formatted.length - 1].endtime,
    });
  }

  const formattedTimeFrames = timeFrames.map(({ day, starttime, endtime }) => ({
    day,
    starttime: convertNumberToTimeFormat(starttime),
    endtime: convertNumberToTimeFormat(endtime),
  })) as { day: Day; starttime: string; endtime: string }[];

  return formattedTimeFrames;
};

function Page({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [availableTimes, setAvailableTimes] = useState<Record<Day, number[]>>();
  const mutation = useApplyFormMutation();
  const timeStep = 0.5;

  const handleSubmitApplyForm = handleSubmit(formData => {
    if (!availableTimes) return;

    const answers = formatQuestionInput(formData);
    const timeFrames = formatAvailableTimeInput(availableTimes, timeStep);

    mutation.mutate({
      userId: 0,
      studyId: data.id,
      answers,
      timeFrames,
    });
  });

  const onChangeTimeTable = (times: Record<string, number[]>) => {
    setAvailableTimes(times);
  };

  return (
    <section>
      <header>
        <StudyDetailCollapseBoard studyDetail={data} />
      </header>
      <div>
        <form onSubmit={handleSubmitApplyForm} className={styles.applyForm}>
          <header className={styles.applyFormHeader}>
            <h3>지원서 작성</h3>
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.applyFormSubmitBtn}
            >
              제출하기
            </button>
          </header>
          <fieldset>
            <legend>스터디 리더가 작성한 질문에 답해주세요</legend>
            {data.questions.map(({ id, text }) => (
              <div key={id} className={styles.applyFormInputField}>
                <label htmlFor={`${id}`}>{text}</label>
                <input
                  id={`${id}`}
                  type="text"
                  placeholder="답 입력"
                  aria-invalid={`${id}` in errors ? "true" : "false"}
                  {...register(`${id}`, {
                    required: "필수 입력입니다",
                  })}
                />
                {`${id}` in errors ? (
                  <small role="alert">{errors[`${id}`]?.message}</small>
                ) : null}
              </div>
            ))}
          </fieldset>
          <fieldset>
            <legend>스터디 진행이 가능한 시간을 선택해주세요</legend>
            <div>
              <TimeTable
                onChange={onChangeTimeTable}
                options={{ startTime: 6, endTime: 24, step: timeStep }}
              />
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default Page;
