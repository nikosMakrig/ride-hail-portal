import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  padding-top: 40px;
  margin-left: 30px;
`;

export const Button = styled.div`
  button {
    display: flex;
    flex-direction: row;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 50px;

  }

  .on {
    color: #000;
  }
  .off {
    color: #ccc;
  }
`;
