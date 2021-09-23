import React from "react";
import "../../index.css";
import * as Styled from "./styled";
import { IUserName } from "../../../types";

export const Header = ({ name }: IUserName) => (
  <Styled.Header>{name} ride survey</Styled.Header>
);
