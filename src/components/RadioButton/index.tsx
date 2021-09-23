import React, { useEffect, useState } from "react";
import "../../index.css";
import * as Styled from "./styled";
import { Container } from "./styled";
import { QuestionTitle } from "../QuestionTitle";
import { ICheckboxInfo, IFieldsData, IRadiobutton } from "../../../types";

export const RadioButton = ({
  getFieldsData,
  info,
}: {
  getFieldsData: (data: IRadiobutton) => void;
  info: IFieldsData;
}) => {
  const [value, setValue] = useState(0);
  const { id, title }: { id: number; title: string } = info;

  useEffect(() => {
    getFieldsData({
      [id]: {
        type: "radioButton",
        title,
        value,
      },
    });
  }, [value]);

  return (
    <>
      <QuestionTitle title={title} />
      {info.data.map((val: ICheckboxInfo) => (
        <Container key={val.id}>
          <label className="container">
            <input
              checked={parseInt(String(value)) === val.id}
              type="radio"
              onChange={() => setValue(parseInt(String(val.id)))}
            />
            <span className="checkmark" />

            <Styled.Label>{val.text}</Styled.Label>
          </label>
        </Container>
      ))}
    </>
  );
};
