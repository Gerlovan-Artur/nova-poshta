import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormEl = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const InputWrapper = styled.div`
  min-height: 64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const InputEl = styled(Field)`
  font-size: 16px;
  width: 250px;
  height: 20px;
  padding: 5px;
  
  border-radius: 8px;
  
  border-color: #fa4a3b;
  font-weight: 700;
  outline: none;

  @media screen and (min-width: 768px) {
    height: 26px;
    margin-bottom: 4px;
  }
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  border: 1px solid black;
  
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  color: #3c3636;

  padding: 5px;
  transition: all 0.3s linear;

  &:hover,
  &:focus {
    color: #fa4a3b;
    background-color: #c2c2c2;
  }
`;

export const Error = styled(ErrorMessage)`
  width: 300px;
  text-align: center;
  color: red;

  font-weight: 500;
  font-size: 12px;

  
`;

export const InfoError = styled.div`
  width: 300px;
  text-align: center;

  margin-bottom: 1px;
  font-weight: 500;
  font-size: 12px;
  color: ${props => {
    return props.error ? 'red' : 'transparent';
  }};
`;