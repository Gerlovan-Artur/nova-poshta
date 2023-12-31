import styled from '@emotion/styled';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    margin-left: 50px;
    padding-top: 0;
    justify-content: flex-start;
  }
`;

export const ListHeader = styled.div`
  width: 150px;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ListEl = styled.ul`
  list-style: none;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  

  overflow-y: ${props => {
    return props.requestHistory.length > 3 ? 'scroll' : 'hidden';
}};
  @media screen and (max-width: 767px) {
    max-height: 100px;
  }
  @media screen and (min-width: 768px) {
    height: 315px;
    overflow-y: ${props => {
      return props.requestHistory.length > 9 ? 'scroll' : 'hidden';
    }};
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140px;
  
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 5px;
  font-weight: 500;

  background-color: #d8d8dd;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    color: #fa4a3b;
    background-color: #c2c2c2;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ClearButton = styled.button`
  width: 150px;
  height: 40px;
  
  border: 1px solid black;
  
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  color: #3c3636;

  transition: all 0.3s linear;

  &:hover,
  &:focus {
    color: #fa4a3b;
    background-color: #c2c2c2;
  }
`;