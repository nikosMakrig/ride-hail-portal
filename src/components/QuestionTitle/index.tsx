import React from "react";
import "../../index.css";
import * as Styled from "./styled";
import { ITitle } from "../../../types";

export const QuestionTitle = ({ title }: ITitle) => (
  <Styled.Title>{title}</Styled.Title>
);
