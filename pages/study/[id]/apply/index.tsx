import StudyDetailCollapseBoard from "@/components/apply/StudyDetailCollapseBoard";
import TimeTable from "@/components/apply/TimeTable";
import getStudyApplyPage, { Study } from "@/factories/studyFactory";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import { useState } from "react";
import { useForm } from "react-hook-form";

type Params = {
  id: string;
} & ParsedUrlQuery;

export const getServerSideProps: GetServerSideProps<{
  data: Study;
}> = async ({ params }) => {
  const { id } = params as Params;
  const data = await getStudyApplyPage(id);

  return { props: { data } };
};

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
        <div>
          <form onSubmit={onSubmit}>
            <fieldset>
              <legend>스터디 리더가 작성한 질문에 답해주세요</legend>
              {data.questionnaire.map(({ id, question }) => (
                <div key={`questionnaire-${id}`}>
                  <label htmlFor={`qn-${id}`}>{question}</label>
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
                  options={{ startTime: 11, endTime: 17.5, step: 0.5 }}
                />
              </div>
            </fieldset>
            <div>
              <button type="submit" disabled={isSubmitting}>
                제출하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Page;
