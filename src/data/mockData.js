

// This is a mock file to fill the form builder with dynamic data.

export const surveyMock = [
  {
    type: "checkBox",
    id: 1,
    title: "01. How did you know about our app?",
    data: [
      { id: 1, text: "From friends" },
      { id: 2, text: "Internet" },
      { id: 3, text: "Social media" },
    ],
  },
  {
    type: "checkBox",
    id: 2,
    title: "02. What do you like more in our service?",
    data: [
      { id: 4, text: "Easy to use" },
      { id: 5, text: "My life becomes easier" },
      { id: 6, text: "Not really sure" },
    ],
  },
  {
    type: "radioButton",
    id: 3,
    title: "03. Would you recommend us to a friend?",
    data: [
      { id: 7, text: "Yes!!!" },
      { id: 8, text: "Probably" },
      { id: 9, text: "Need more time to figure it out" },
    ],
  },
  {
    type: "starRating",
    id: 4,
    title: "04. How would you rate us?",
    data: [{ id: 10 }, { id: 11 }, { id: 12 }],
  },
  {
    type: "textArea",
    id: 5,
    title: "05. Please feel free to write anything else.",
  }
];

export const simpleServeyMock =  [
  {
    type: "starRating",
    id: 6,
    title: "Can you rate your ride?",
    data: [{ id: 10 }, { id: 11 }, { id: 12 }],
  },

  {
    type: "textArea",
    id: 7,
    title: "You can write us about anything.",
  },
];
