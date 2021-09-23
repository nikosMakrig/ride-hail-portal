import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  padding-top: 20px;
  margin-left: 30px;
`;

export const Button = styled.span`
  color: #4d515a;
  font-size: 14px;
  background-color: rgba(121,129,139,0.79);
  height: 50px;
  width: 100px;
  border-radius: 10px;
  
    &:hover > div {
    background-color: #60646d;
    cursor: pointer;
    transition: all 0.3s ease;
  }
`;

export const Title = styled.div`
  color: white;
  font-size: 14px;
  background-color: #4d515a;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

`;
