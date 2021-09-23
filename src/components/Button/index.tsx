import React from "react";
import "../../index.css";
import * as Styled from "./styled";
import { QuestionTitle } from "../QuestionTitle";
import { ITitle } from "../../../types";

export const Button = ({
  handleClick,
  title,
  text,
}: {
  handleClick?: (data: any) => void;
  title: string;
  text: string;
}) => {
  const ButtonTitle = ({ title }: ITitle) => (
    <Styled.Title>{title}</Styled.Title>
  );

  return (
    <>
      <QuestionTitle title={title} />
      <Styled.Container>
        <Styled.Button onClick={handleClick}>
          <ButtonTitle title={text} />
        </Styled.Button>
      </Styled.Container>
    </>
  );
};
