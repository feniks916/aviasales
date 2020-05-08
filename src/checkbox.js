import styled from 'styled-components';

export const CheckboxArea = styled.ul`
  margin-top: 110px;
  margin-right: 10px;
  background-color: white;
  width: 252px;
  height: 245px;
  padding: 0;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const CheckText = styled.p`
  padding-top: 20px;
  padding-left: 20px;
  text-transform: uppercase;
  font-size: 12px;
`;

export const CheckboxItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  margin: 0;
  margin-right: 40px;
  background-color: white;
  width: 250px;
  height: 38px;
  &:hover {
    background-color: #f1fcff;
  }
`;

export const CheckboxSpan = styled.span`
  margin-left: 25px;
`;
