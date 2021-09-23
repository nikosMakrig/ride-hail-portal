import { _API, BASE_URL } from "../constants";

export const createSurvey = (surveyFormData: any) => {
  const PUT = {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(surveyFormData),
  };

  fetch(`${BASE_URL}${_API.CREATE_SURVEY}`, PUT)
    .then((response) => response.json())
    .then((data) => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
    .catch((err) => console.log(err)); // Do something with the error
};
