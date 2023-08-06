import styled from '@emotion/styled';

export const DepartmentListHeader = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  border-radius: 8px;
  text-align: center;
  padding-top: 20px;
`;

export const DepartmentList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  flex-wrap: wrap;
  padding: 0;
  gap: 3px;
`;

export const DepartmentListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 130px;
  height: 250px;
  padding: 5px;

  text-align: center;
  border-radius: 8px;
  

  font-size: 12px;
  font-weight: 500;
  background-color: #d8d8dd;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    margin: 15px;
    width: 200px;
    height: 350px;
  }
`;

export const DescriptionCityItem = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
  color: #858585;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const DescriptionItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 80px;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 5px;
  padding: 5px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
    padding: 10px;
    height: 100px;
  }
`;

export const ScheduleItem = styled.div`
  font-size: 12px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ScheduleHeader = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
  color: #858585;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const LoadMoreButton = styled.button`
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

  &:hover {
    color: #fa4a3b;
    background-color: #c2c2c2;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;