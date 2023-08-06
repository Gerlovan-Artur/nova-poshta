import styled from '@emotion/styled';
import { Field, ErrorMessage } from 'formik';

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
export const ErrorMessageDepartment = styled(ErrorMessage)`
  width: 300px;
  text-align: center;
  color: red;
  font-weight: 500;
  font-size: 12px;
`;