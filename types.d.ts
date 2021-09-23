export interface ITitle {
  title: string;
}

export interface IUserName {
  name: string;
}

export interface ICheckbox {
  [id: number]: {
    type: string;
    title: string;
    value: Array<number>;
  };
}

export interface IRadiobutton {
  [id: number]: {
    type: string;
    title: string;
    value: number;
  };
}

export interface IStarRating {
  [id: number]: {
    type: string;
    title: string;
    value: number;
  };
}

export interface ITextarea {
  [id: number]: {
    type: string;
    title: string;
    value: string;
  };
}

export interface ICheckboxInfo {
  id: number;
  text: string;
}

export interface IRadiobuttonInfo {
  id: number;
  text: string;
}

export interface IFieldsData {
  data: [{ id: number; text: string }];
  id: number;
  title: string;
  type: string;
}
