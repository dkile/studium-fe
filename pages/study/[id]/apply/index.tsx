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

function Page({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [selectedTimes, setSelectedTimes] = useState<string[]>();

  const onSubmit = handleSubmit(formData => {
    formData.selectedTimes = JSON.stringify(selectedTimes);
    console.log(formData);
  });

  const onChangeTimeTable = (times: string[]) => {
    setSelectedTimes(times);
  };

  return (
    <section>
      <header>
        <StudyDetailCollapseBoard studyDetail={data} />
      </header>
      <div>
        <form onSubmit={onSubmit} className={styles.applyForm}>
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
              <div
                key={`questionnaire-${id}`}
                className={styles.applyFormInputField}
              >
                <label htmlFor={`qn-${id}`}>{text}</label>
                <input
                  id={`qn-${id}`}
                  type="text"
                  placeholder="답 입력"
                  aria-invalid={`qn-${id}` in errors ? "true" : "false"}
                  {...register(`qn-${id}`, {
                    required: "필수 입력입니다",
                  })}
                />
                {`qn-${id}` in errors ? (
                  <small role="alert">{errors[`qn-${id}`]?.message}</small>
                ) : null}
              </div>
            ))}
          </fieldset>
          <fieldset>
            <legend>스터디 진행이 가능한 시간을 선택해주세요</legend>
            <div>
              <TimeTable
                onChange={onChangeTimeTable}
                options={{ startTime: 8, endTime: 18, step: 0.5 }}
              />
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default Page;
