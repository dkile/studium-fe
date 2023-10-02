import React, { useState } from "react";
import styles from "@/styles/components/TagInput.module.sass";

export interface TagInputProps {
  tagList: Array<string>;
  maxCount: number;
  onChangeTags(newTagList: Array<string>): void;
}

function TagInput({
  tagList,
  maxCount,
  onChangeTags,
}: TagInputProps): JSX.Element {
  const [tagItem, setTagItem] = useState<string>("");
  const tagColors = ["#A78BFA", "#38BDF8", "#FB7185"];

  const submitTagItem = () => {
    if (tagList.length === maxCount) {
      alert("태그는 최대 5개까지 입력 가능합니다.");
      return;
    }

    if (!tagList.find(tag => tag === tagItem)) {
      onChangeTags([...tagList, tagItem]);
    }
    setTagItem("");
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length !== 0 && e.key === "Enter") {
      submitTagItem();
    }
  };

  const handleDeleteTagItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    const deleteTagItem = e.currentTarget.parentElement
      ?.firstChild as HTMLElement;
    const filteredTagList = tagList.filter(
      tagItem => tagItem !== deleteTagItem.innerText,
    );
    onChangeTags(filteredTagList);
  };

  return (
    <div>
      <div className={styles.tagBox}>
        {tagList.map((tagItem, index) => (
          <div
            key={index}
            className={styles.tagListItem}
            style={{ background: tagColors[index % 3] }}
          >
            <span>{tagItem}</span>
            <button
              type="button"
              onClick={handleDeleteTagItem}
              className={styles.deleteButton}
              style={{ color: tagColors[index % 3] }}
            >
              X
            </button>
          </div>
        ))}
        <input
          type="text"
          placeholder="태그를 추가하려면 Enter를 눌러주세요."
          className={styles.tagItemInput}
          onChange={e => setTagItem(e.target.value)}
          value={tagItem}
          onKeyUp={handleEnter}
        />
      </div>
    </div>
  );
}

export default TagInput;
