import React, { useEffect, useState } from "react";

import { CheckBox } from "./components/CheckBox";
import { RadioButton } from "./components/RadioButton";
import { StarRating } from "./components/StarRating";
import { TextArea } from "./components/TextArea";
import { IFieldsData } from "../types";

// This form builder will build dynamic forms by simply connecting it to an api with the proper contract
export const UseSurveyBuilder = (
  formBuilderData: any,
  getFieldsData: (data: any) => void,
  payload: any
) => {
  const [formElements, setFormElements] = useState([]);
  useEffect(() => {
    const fields = formBuilderData.map((info: IFieldsData) => {
      switch (info.type) {
        case "checkBox":
          return (
            <CheckBox key={info.id} getFieldsData={getFieldsData} info={info} />
          );
        case "radioButton":
          return (
            <RadioButton
              key={info.id}
              getFieldsData={getFieldsData}
              info={info}
            />
          );
        case "starRating":
          return (
            <StarRating
              key={info.id}
              getFieldsData={getFieldsData}
              info={info}
            />
          );
        case "textArea":
          return (
            <TextArea key={info.id} getFieldsData={getFieldsData} info={info} />
          );
        default:
          return null;
      }
    });
    setFormElements(fields);
  }, [formBuilderData, payload]);

  return formElements;
};
