import React from "react";
import "../../index.css";
import * as Styled from "./styled";
import { ITitle } from "../../../types";

{
  /* This button is just to flip surveys for demo.
 In real life an option from the server would come to distinct which one to show per user. */
}
export const FlipSurveyButton = ({
  handleClick,
}: {
  handleClick?: (data: any) => void;
}) => {
  const ButtonTitle = ({ title }: ITitle) => (
    <Styled.Title>{title}</Styled.Title>
  );

  return (
    <Styled.Container>
      <Styled.Button onClick={handleClick}>
        <ButtonTitle title="Flip survey (Demo)" />
      </Styled.Button>
    </Styled.Container>
  );
};
