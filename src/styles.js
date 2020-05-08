import styled from 'styled-components';

export const TicketsArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 502px;
  height: 184px;
  margin: 10px;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

export const PriceArea = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  height: 35px;
  width: 90%;
  justify-content: space-between;
  p {
    color: #2196f3;
    font-weight: 600;
    font-size: 24px;
  }
  img {
    width: 110px;
    height: 36px;
  }
`;

export const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstPoint = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-around;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 140px;
  }
  li {
    list-style-type: none;
    span {
      text-transform: uppercase;
      color: #a0b0b9;
      font-size: 12px;
    }
  }
`;

export const SecondPoint = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-around;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  li {
    list-style-type: none;
    span {
      text-transform: uppercase;
      color: #a0b0b9;
      font-size: 12px;
    }
  }
`;

export const ButtonArea = styled.div`
  margin: 10px;
`;

export const Button = styled.button`
  width: 251px;
  height: 50px;
  background: #fff;
  box-shadow: none;
  outline: none;
  border: 1px solid #dfe5ec;
  p {
    color: #4a4a4a;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    padding-top: 15px;
  }
  &:hover {
    background-color: #2196f3;
    p {
      color: white;
    }
  }
  &:focus {
    background-color: #2196f3;
    p {
      color: white;
    }
  }
`;
