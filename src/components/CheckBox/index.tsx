import React, { useEffect, useState } from "react";
import "../../index.css";
import * as Styled from "./styled";
import { Container } from "./styled";
import { QuestionTitle } from "../QuestionTitle";
import { ICheckbox, ICheckboxInfo, IFieldsData } from "../../../types";

export const CheckBox = ({
  getFieldsData,
  info,
}: {
  getFieldsData: (data: ICheckbox) => void;
  info: IFieldsData;
}) => {
  const [ids, setIds] = useState<Array<number>>([]);
  const { id, title }: { id: number; title: string } = info;

  useEffect(() => {
    getFieldsData({
      [id]: {
        type: "checkbox",
        title: title,
        value: ids,
      },
    });
  }, [ids]);

  const selectAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = parseInt(event.target.value);

    if (ids.includes(selectedId)) {
      const newIds = ids.filter((id) => id !== selectedId);
      setIds(newIds);
    } else {
      const newIds = [...ids];
      newIds.push(selectedId);
      setIds(newIds);
    }
  };

  return (
    <>
      <QuestionTitle title={title} />
      {info.data.map((val: ICheckboxInfo) => (
        <Container key={val.id}>
          <label className="container">
            <input
              type="checkbox"
              value={val.id}
              onChange={selectAnswer}
              checked={ids.includes(val.id)}
            />
            <span className="checkmark" />
            <Styled.Label>{val.text}</Styled.Label>
          </label>
        </Container>
      ))}
    </>
  );
};
