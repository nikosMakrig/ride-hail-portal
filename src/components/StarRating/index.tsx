import React, { useEffect, useState } from "react";
import "../../index.css";
import * as Styled from "./styled";
import { Container } from "./styled";
import { QuestionTitle } from "../QuestionTitle";
import { IStarRating, IFieldsData } from "../../../types";

export const StarRating = ({
  getFieldsData,
  info,
}: {
  getFieldsData: (data: IStarRating) => void;
  info: IFieldsData;
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const defaultId = Math.floor(Math.random() * 100);

  useEffect(() => {
    getFieldsData({
      [info?.id? info.id : defaultId]: {
        type: "starRating",
        title: info?.title,
        value: rating,
      },
    });
  }, [rating]);

  return (
    <>
      <QuestionTitle title={info?.title ? info?.title : "Please rate your ride."} />
      <Container>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <Styled.Button key={`${index}_Rating_Button`}>
              <button
                type="button"
                key={index}
                className={index <= (hover || rating) ? "on" : "off"}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="star">&#9733;</span>
              </button>
            </Styled.Button>
          );
        })}
      </Container>
    </>
  );
};
