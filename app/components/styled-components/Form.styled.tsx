import { Field, Form } from "formik";
import { styled } from "styled-components";

export const FormPageContainer = styled.main`
  background-color: #4f23e1;
  padding: 3rem ;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const StyledForm = styled(Form)`
  border: 2px solid red;
  padding: 2rem;
  max-width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 8px;
  box-shadow: 1rem 1rem 1rem #18181818;
  background-color: white; 
  @media only screen and (max-width: 767px) {
    padding: 1rem;
  }
`;
export const Label = styled.label``;
export const Input = styled(Field)`
  display: block;
  width: auto;
  padding: 0.25em;
  outline: none;
  border: 1px solid red;
  transition: all 0.2s ease-in;
  font-size: 1.25rem;
  &:focus {
    border: 1px solid green;
  }
`;
export const FormTitle = styled.h2`
  text-align: center;
  
`;
