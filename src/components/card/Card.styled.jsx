import styled from '@emotion/styled';

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;

  @media screen and (min-width: 768px) {
    
    margin-top: 0;
  }
`;

export const InfoEl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 280px;
  height: 80px;
  font-weight: 700;
  color: #858585;
  font-size: 16px;
  background-color: #d8d8dd;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 10px;
  padding: 2px;

  height: 100%;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 120px;
    font-size: 20px;
    margin-bottom: 20px;
    padding: 10px;
  }
`;

export const InfoElContent = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: black;
  padding: 2px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 10px;
  }
`;