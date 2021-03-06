import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  padding-top: 40px;
  margin-left: 30px;
  
  textarea {
    resize: none;
    background: none repeat scroll 0 0 rgba(0, 0, 0, 0.07);
    border-color: -moz-use-text-color #ffffff #ffffff -moz-use-text-color;
    border-image: none;
    border-radius: 6px;
    border-style: none solid solid none;
    border-width: medium 1px 1px medium;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
    color: #555555;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 1em;
    line-height: 1.4em;
    padding: 5px 8px;
    transition: background-color 0.2s ease 0s;
  }
  textarea:focus {
    background: none repeat scroll 0 0 lightgray;
    outline-width: 0;
  }
`;
