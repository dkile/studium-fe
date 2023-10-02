/* eslint-disable jsx-a11y/label-has-associated-control */
import { ReactElement, useCallback, useState } from "react";
import Image from "next/image";
import styles from "@/styles/pages/StudyNew.module.sass";
import TagInput from "@/components/common/TagInput";
import { useRouter } from "next/router";
// eslint-disable-next-line import/no-cycle
import { postStudy } from "@/apis/study/api";

// TODO: 입력값 validation 추가 .. error message 어떻게 보여줄지
// alert, confirm 써놓은거 Modal로 대체
// TODO: 전송버튼 동작 API 연결

export interface StudyForm {
  name: string;
  intro: string;
  tags: Array<string>;
  templateContent: string;
  rules: Array<string>;
  startDate: string;
  endDate: string;
  recruitStartDate: string;
  recruitEndDate: string;
  total: number;
  location: "ONLINE" | "OFFLINE";
  locationDetail?: string;
  questions: Array<string>;
}

export type IsStudyFormError = Record<keyof StudyForm, boolean> & {
  dateRange: boolean;
  recruiteDateRange: boolean;
};

const todayDateTime = new Date().toISOString().slice(0, -8);
const initialStudyForm: StudyForm = {
  name: "",
  intro: "",
  tags: [],
  templateContent: "",
  rules: [""],
  startDate: "",
  endDate: "",
  recruitStartDate: "",
  recruitEndDate: "",
  total: 0,
  location: "ONLINE",
  locationDetail: "",
  questions: [""],
};

const initialIsStudyFormError: IsStudyFormError = {
  name: false,
  intro: false,
  tags: false,
  templateContent: false,
  rules: false,
  startDate: false,
  endDate: false,
  recruitStartDate: false,
  recruitEndDate: false,
  total: false,
  location: false,
  locationDetail: false,
  questions: false,
  dateRange: false,
  recruiteDateRange: false,
};

function StudyNew() {
  const [studyForm, setStudyForm] = useState<StudyForm>(initialStudyForm);
  const [isStudyFormError, setIsStudyFormError] = useState<IsStudyFormError>(
    initialIsStudyFormError,
  );
  const router = useRouter();

  function handleAddRuleBox() {
    if (studyForm.rules.length < 5) {
      setStudyForm(studyForm => ({
        ...studyForm,
        rules: [...studyForm.rules, ""],
      }));
    }
  }

  function handleChangeRule(index: number, rule: string) {
    setStudyForm(studyForm => ({
      ...studyForm,
      rules: [
        ...studyForm.rules.slice(0, index),
        rule,
        ...studyForm.rules.slice(index + 1),
      ],
    }));
  }

  function deleteRuleInput(index: number) {
    console.log(index);
    if (studyForm.rules[index]) {
      // eslint-disable-next-line no-restricted-globals
      const ok = confirm("작성 중인 규칙이 삭제됩니다.");
      if (!ok) {
        return;
      }
    }

    setStudyForm(studyForm => ({
      ...studyForm,
      rules: [
        ...studyForm.rules.slice(0, index),
        ...studyForm.rules.slice(index + 1),
      ],
    }));
  }

  function handleAddQuestionBox() {
    if (studyForm.questions.length < 5) {
      setStudyForm(studyForm => ({
        ...studyForm,
        questions: [...studyForm.questions, ""],
      }));
    }
  }

  function handleChangeQuestion(index: number, question: string) {
    setStudyForm(studyForm => ({
      ...studyForm,
      questions: [
        ...studyForm.questions.slice(0, index),
        question,
        ...studyForm.questions.slice(index + 1),
      ],
    }));
  }

  function deleteQuestionInput(index: number) {
    if (studyForm.questions[index]) {
      // eslint-disable-next-line no-restricted-globals
      const ok = confirm("작성 중인 질문이 삭제됩니다.");
      if (!ok) {
        return;
      }
    }

    setStudyForm(studyForm => ({
      ...studyForm,
      questions: [
        ...studyForm.questions.slice(0, index),
        ...studyForm.questions.slice(index + 1),
      ],
    }));
  }

  const handleChangeTags = useCallback((newTagList: Array<string>) => {
    setStudyForm(studyForm => ({
      ...studyForm,
      tags: newTagList,
    }));
  }, []);

  function isValidStudyForm() {
    let isValid = true;
    if (!studyForm.name) {
      setIsStudyFormError(isStudyFormError => ({
        ...isStudyFormError,
        name: true,
      }));
      isValid = false;
    }

    if (!studyForm.intro) {
      setIsStudyFormError(isStudyFormError => ({
        ...isStudyFormError,
        intro: true,
      }));
      isValid = false;
    }

    if (!studyForm.templateContent) {
      setIsStudyFormError(isStudyFormError => ({
        ...isStudyFormError,
        templateContent: true,
      }));
      isValid = false;
    }

    if (!studyForm.startDate) {
      setIsStudyFormError(isStudyFormError => ({
        ...isStudyFormError,
        startDate: true,
      }));
      isValid = false;
    }

    if (!studyForm.endDate) {
      setIsStudyFormError(isStudyFormError => ({
        ...isStudyFormError,
        endDate: true,
      }));
      isValid = false;
    }

    if (!studyForm.recruitStartDate) {
      setIsStudyFormError(isStudyFormError => ({
        ...isStudyFormError,
        recruitStartDate: true,
      }));
      isValid = false;
    }

    if (!studyForm.recruitEndDate) {
      setIsStudyFormError(isStudyFormError => ({
        ...isStudyFormError,
        recruitEndDate: true,
      }));
      isValid = false;
    }

    if (!studyForm.total) {
      setIsStudyFormError(isStudyFormError => ({
        ...isStudyFormError,
        total: true,
      }));
      isValid = false;
    }

    if (studyForm.location === "OFFLINE" && !studyForm.locationDetail) {
      setIsStudyFormError(isStudyFormError => ({
        ...isStudyFormError,
        locationDetail: true,
      }));
      isValid = false;
    }

    if (new Date(studyForm.startDate) >= new Date(studyForm.endDate)) {
      setIsStudyFormError(isStudyFormError => ({
        ...isStudyFormError,
        dateRange: true,
      }));
      isValid = false;
    }

    if (
      new Date(studyForm.recruitStartDate) >= new Date(studyForm.recruitEndDate)
    ) {
      setIsStudyFormError(isStudyFormError => ({
        ...isStudyFormError,
        recruiteDateRange: true,
      }));
      isValid = false;
    }

    return isValid;
  }

  function dateInputToISOString(dateInput: string) {
    return new Date(dateInput).toISOString();
  }

  async function submitStudyForm() {
    console.log(studyForm);
    try {
      if (!isValidStudyForm()) {
        return;
      }
      const studyFormToCreate = {
        ...studyForm,
        startDate: dateInputToISOString(studyForm.startDate),
        endDate: dateInputToISOString(studyForm.endDate),
        recruitStartDate: dateInputToISOString(studyForm.recruitStartDate),
        recruitEndDate: dateInputToISOString(studyForm.recruitEndDate),
      };
      const response = await postStudy(studyFormToCreate);
      console.log(response);
      alert(
        "스터디가 성공적으로 만들어졌어요! 지원 목록은 내 스터디에서 확인 가능하답니다!",
      );
    } catch (e) {
      console.error(e);
      alert(
        "스터디를 만드는 도중 오류가 발생했어요. 잠시 후 다시 시도해주세요.",
      );
    }
  }

  function goBack() {
    // TODO: 빈칸 확인 후 작성된 칸 있으면 확인창 띄워주기
    router.back();
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <button
          type="button"
          className={styles.submitButton}
          onClick={submitStudyForm}
        >
          저장하기
        </button>
        <button type="button" onClick={goBack}>
          <Image
            src="https://studium-fe.s3.ap-northeast-2.amazonaws.com/public/delete-icon.svg"
            alt="close_icon"
            width={24}
            height={24}
            aria-hidden
          />
        </button>
      </div>
      <div className={styles.titleContainer}>스터디 첫 걸음</div>
      <div className={styles.formContainer}>
        <div>
          <div className={styles.mandatoryInput}>
            이름 <span>*</span>
          </div>

          <input
            type="text"
            className={`${styles.studyInput} ${
              isStudyFormError.name ? styles.studyInputError : ""
            }`}
            onChange={e => {
              setStudyForm(studyForm => ({
                ...studyForm,
                name: e.target.value,
              }));
              setIsStudyFormError(isStudyFormError => ({
                ...isStudyFormError,
                name: false,
              }));
            }}
            placeholder="스터디의 이름을 적어주세요"
          />
          {isStudyFormError.name && (
            <div className={styles.inputErrorMessage}>
              스터디 이름을 필수로 입력해주세요
            </div>
          )}
        </div>
        <div>
          <div className={styles.mandatoryInput}>
            한 줄 소개 <span>*</span>
          </div>
          <input
            type="text"
            className={`${styles.studyInput} ${
              isStudyFormError.intro ? styles.studyInputError : ""
            }`}
            onChange={e => {
              setStudyForm(studyForm => ({
                ...studyForm,
                intro: e.target.value,
              }));
              setIsStudyFormError(isStudyFormError => ({
                ...isStudyFormError,
                intro: false,
              }));
            }}
            placeholder="스터디를 가장 잘 표현할 수 있는 문장을 한 줄로 소개해주세요"
          />
          {isStudyFormError.intro && (
            <div className={styles.inputErrorMessage}>
              소개를 필수로 입력해주세요
            </div>
          )}
        </div>
        <div>
          <div className={styles.withConstraintForm}>
            <div>태그</div>
            <div className={styles.maxCountText}>(최대 5개)</div>
          </div>
          <div style={{ width: "100%" }}>
            <TagInput
              tagList={studyForm.tags}
              maxCount={5}
              onChangeTags={handleChangeTags}
            />
          </div>
        </div>
        <div>
          <div className={styles.mandatoryInput}>
            스터디 진행 방식
            <span>*</span>
          </div>
          <textarea
            className={`${styles.template} ${
              isStudyFormError.templateContent ? styles.studyInputError : ""
            }`}
            rows={10}
            placeholder="스터디 진행 방식을 입력해주세요."
            onChange={e => {
              setStudyForm(studyForm => ({
                ...studyForm,
                templateContent: e.target.value,
              }));
              setIsStudyFormError(isStudyFormError => ({
                ...isStudyFormError,
                templateContent: false,
              }));
            }}
          />
          {isStudyFormError.templateContent && (
            <div className={styles.inputErrorMessage}>
              스터디 진행 방식을 필수로 입력해주세요
            </div>
          )}
        </div>
        <div>
          <div className={styles.withConstraintForm}>
            <div>진행 규칙</div>
            <div className={styles.maxCountText}>(최대 5개)</div>
          </div>
          {studyForm.rules.map((rule, index) => (
            <div key={index} className={styles.deletableInputWrap}>
              <input
                key={index}
                className={styles.studyInput}
                type="text"
                value={rule}
                onChange={e => handleChangeRule(index, e.target.value)}
                placeholder="스터디 진행에 필요한 규칙들을 작성해주세요"
              />
              {index !== 0 && (
                <button
                  type="button"
                  key={index}
                  className={styles.deleteInputButton}
                  onClick={() => deleteRuleInput(index)}
                >
                  [—]
                </button>
              )}
            </div>
          ))}
          {studyForm.rules.length < 5 && (
            <button
              type="button"
              className={styles.addInputBox}
              onClick={handleAddRuleBox}
            >
              +
            </button>
          )}
        </div>
        <div>
          <div className={styles.mandatoryInput}>
            모집 기간 <span>*</span>
          </div>
          <div className={styles.dateRangeContainer}>
            <div>
              <input
                type="datetime-local"
                id="studyForm-recruit-start"
                name="studyForm-recruit-start"
                className={
                  isStudyFormError.recruitStartDate ||
                  isStudyFormError.recruiteDateRange
                    ? styles.datetimeError
                    : ""
                }
                value={studyForm.recruitStartDate}
                onChange={e => {
                  setStudyForm({
                    ...studyForm,
                    recruitStartDate: e.target.value,
                  });
                  setIsStudyFormError(isStudyFormError => ({
                    ...isStudyFormError,
                    recruitStartDate: false,
                  }));
                }}
                onClick={e => e.currentTarget.showPicker()}
                min={todayDateTime}
                max="2030-01-01T00:00"
              />
              {isStudyFormError.recruitStartDate ? (
                <div className={styles.inputErrorMessage}>
                  시작일을 필수로 입력해주세요
                </div>
              ) : (
                isStudyFormError.recruiteDateRange && (
                  <div className={styles.inputErrorMessage}>
                    마감일을 시작일보다 늦은 일자로 입력해주세요
                  </div>
                )
              )}
            </div>
            -
            <div>
              <input
                type="datetime-local"
                id="studyForm-recruit-end"
                name="studyForm-recruit-end"
                className={
                  isStudyFormError.recruitEndDate ||
                  isStudyFormError.recruiteDateRange
                    ? styles.datetimeError
                    : ""
                }
                value={studyForm.recruitEndDate}
                onChange={e => {
                  setStudyForm({
                    ...studyForm,
                    recruitEndDate: e.target.value,
                  });
                  setIsStudyFormError(isStudyFormError => ({
                    ...isStudyFormError,
                    recruitEndDate: false,
                  }));
                }}
                onClick={e => e.currentTarget.showPicker()}
                min={todayDateTime}
                max="2030-01-01T00:00"
              />
              {isStudyFormError.recruitEndDate && (
                <div className={styles.inputErrorMessage}>
                  마감일을 필수로 입력해주세요
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className={styles.mandatoryInput}>
            진행 기간
            <span>*</span>
          </div>
          <div className={styles.dateRangeContainer}>
            <div>
              <input
                type="datetime-local"
                id="studyForm-study-start"
                name="studyForm-study-start"
                className={
                  isStudyFormError.startDate || isStudyFormError.dateRange
                    ? styles.datetimeError
                    : ""
                }
                value={studyForm.startDate}
                onChange={e => {
                  setStudyForm({
                    ...studyForm,
                    startDate: e.target.value,
                  });
                  setIsStudyFormError(isStudyFormError => ({
                    ...isStudyFormError,
                    startDate: false,
                  }));
                }}
                onClick={e => e.currentTarget.showPicker()}
                min={todayDateTime}
                max="2030-01-01T00:00"
              />
              {isStudyFormError.startDate ? (
                <div className={styles.inputErrorMessage}>
                  시작일을 필수로 입력해주세요
                </div>
              ) : (
                isStudyFormError.dateRange && (
                  <div className={styles.inputErrorMessage}>
                    마감일을 시작일보다 늦은 일자로 입력해주세요
                  </div>
                )
              )}
            </div>
            -
            <div>
              <input
                type="datetime-local"
                id="studyForm-study-end"
                name="studyForm-study-end"
                className={
                  isStudyFormError.endDate || isStudyFormError.dateRange
                    ? styles.datetimeError
                    : ""
                }
                value={studyForm.endDate}
                onChange={e => {
                  setStudyForm({
                    ...studyForm,
                    endDate: e.target.value,
                  });
                  setIsStudyFormError(isStudyFormError => ({
                    ...isStudyFormError,
                    endDate: false,
                  }));
                }}
                onClick={e => e.currentTarget.showPicker()}
                min={todayDateTime}
                max="2030-01-01T00:00"
              />
              {isStudyFormError.endDate && (
                <div className={styles.inputErrorMessage}>
                  마감일을 필수로 입력해주세요
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.columnFlexForm}>
          <div className={styles.recruitingForm}>
            <div className={styles.mandatoryInput}>
              모집 인원 <span>*</span>
            </div>
            <input
              type="number"
              className={`${styles.studyInput} ${
                isStudyFormError.total ? styles.studyInputError : ""
              }`}
              onChange={e => {
                setStudyForm(studyForm => ({
                  ...studyForm,
                  total: Number(e.target.value),
                }));
                setIsStudyFormError(isStudyFormError => ({
                  ...isStudyFormError,
                  total: false,
                }));
              }}
              placeholder="최대 정원을 입력해주세요"
            />
            {isStudyFormError.total && (
              <div className={styles.inputErrorMessage}>
                인원을 필수로 입력해주세요
              </div>
            )}
          </div>
          <div className={styles.studyPlaceForm}>
            <div className={styles.mandatoryInput}>
              진행 장소 <span>*</span>
            </div>
            <div className={styles.studyPlaceInputWrap}>
              <div className={styles.studyPlaceRadioConainer}>
                <label>
                  <input
                    type="radio"
                    name="location"
                    id="ONLINE"
                    value="ONLINE"
                    defaultChecked
                    onChange={() => {
                      setStudyForm(studyForm => ({
                        ...studyForm,
                        location: "ONLINE",
                        locationDetail: "",
                      }));
                      setIsStudyFormError(isStudyFormError => ({
                        ...isStudyFormError,
                        locationDetail: false,
                      }));
                    }}
                  />
                  온라인
                </label>
                <label>
                  <input
                    type="radio"
                    name="location"
                    id="OFFLINE"
                    value="OFFLINE"
                    onChange={() =>
                      setStudyForm(studyForm => ({
                        ...studyForm,
                        location: "OFFLINE",
                      }))
                    }
                  />
                  오프라인
                </label>
              </div>
              <input
                type="text"
                className={`${styles.studyInput} ${
                  isStudyFormError.locationDetail ? styles.studyInputError : ""
                }`}
                disabled={studyForm.location === "ONLINE"}
                value={studyForm.locationDetail}
                placeholder="오프라인 장소를 입력해주세요"
                onChange={e => {
                  setStudyForm(studyForm => ({
                    ...studyForm,
                    locationDetail: e.target.value,
                  }));
                  setIsStudyFormError(isStudyFormError => ({
                    ...isStudyFormError,
                    locationDetail: false,
                  }));
                }}
              />
            </div>
            {isStudyFormError.locationDetail && (
              <div className={styles.inputErrorMessage}>
                오프라인 선택 시 장소를 필수로 입력해주세요
              </div>
            )}
          </div>
        </div>
        <div>
          <div className={styles.withConstraintForm}>
            <div>지원자에게 궁금한 점</div>
            <div className={styles.maxCountText}>(최대 5개)</div>
          </div>
          {studyForm.questions.map((questions, index) => (
            <div key={index} className={styles.deletableInputWrap}>
              <input
                key={index}
                className={styles.studyInput}
                type="text"
                value={questions}
                onChange={e => handleChangeQuestion(index, e.target.value)}
                placeholder="지원 시 지원자가 답변할 질문을 입력해주세요"
              />
              {index !== 0 && (
                <button
                  type="button"
                  key={index}
                  className={styles.deleteInputButton}
                  onClick={() => deleteQuestionInput(index)}
                >
                  [—]
                </button>
              )}
            </div>
          ))}
          {studyForm.questions.length < 5 && (
            <button
              type="button"
              className={styles.addInputBox}
              onClick={handleAddQuestionBox}
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

StudyNew.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default StudyNew;
