import React, { useEffect, useState } from "react";
import "../../index.css";
import * as Styled from "./styled";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { UseSurveyBuilder } from "../../hooks";
import { createSurvey } from "../../data/api";

import { surveyMock, simpleServeyMock } from "../../data/mockData";
import { FlipSurveyButton } from "../../components/FlipSurveyButton";

export const Survey = () => {
  const [formData, setFormData] = useState({});
  const [formBuilderData, setFormBuilderData] = useState(surveyMock);
  const [showSubmitMessage, setShowSubmitMessage] = useState(false);
  const [isSurvey, setIsSurvey] = useState(true);

  const getFieldsData = (data: any) => {
    setFormData({
      ...formData,
      ...data,
      userId: Math.floor(Math.random() * 100),
      date: new Date().toISOString().replace("T", " ").substring(0, 19),
    });
  };

  const formElements = UseSurveyBuilder(
    formBuilderData,
    getFieldsData,
    formData
  );

  useEffect(() => {
    setFormBuilderData(isSurvey ? surveyMock : simpleServeyMock);
  }, [isSurvey]);

  return (
    <>
      {!showSubmitMessage && (
        <FlipSurveyButton handleClick={() => setIsSurvey(!isSurvey)} />
      )}
      <Styled.Root>
        <Styled.Container>
          {showSubmitMessage ? (
            <Styled.GoBackContainer>
              <Button
                title="Thank you for your survey !"
                text="Go back"
                handleClick={() => setShowSubmitMessage(false)}
              />
            </Styled.GoBackContainer>
          ) : (
            <>
              {" "}
              <Header name="Nikos" />
              {formElements}
              <Button
                title="Please submit your answers"
                text="Submit"
                handleClick={() => {
                  createSurvey(formData);
                  setShowSubmitMessage(true);
                }}
              />
            </>
          )}
        </Styled.Container>
      </Styled.Root>
    </>
  );
};
