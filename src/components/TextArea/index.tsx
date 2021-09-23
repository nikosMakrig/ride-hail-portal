import React, { useEffect, useState } from "react";
import "../../index.css";
import * as Styled from "./styled";
import { QuestionTitle } from "../QuestionTitle";
import { IFieldsData, ITextarea } from "../../../types";

export const TextArea = ({
  getFieldsData,
  info,
}: {
  getFieldsData: (data: ITextarea) => void;
  info: IFieldsData;
}) => {
  const [value, setValue] = useState("");
  const defaultId = Math.floor(Math.random() * 100);
  const { id, title }: { id: number; title: string } = info || {};

  useEffect(() => {
    getFieldsData({
      [id ? id : defaultId]: {
        type: "textarea",
        title,
        value,
      },
    });
  }, [value]);

  return (
    <>
      <QuestionTitle title={title ? title : "Please leave a comment."} />
      <Styled.Container>
        <textarea
          placeholder="Anything you want!"
          rows={5}
          cols={50}
          onChange={({ target }) => setValue(target.value)}
        />
      </Styled.Container>
    </>
  );
};
