import styled from 'styled-components';

export const TicketsArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 502px;
  height: 204px;
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
    margin-right:18px;
  }
`;

export const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstPoint = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  ul {
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-left:20px; 
    width:161px;
  }
  li {
    list-style-type: none;
    span {
      text-transform: uppercase;
      color: #a0b0b9;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
    }
  }
`;

export const SecondPoint = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  padding-bottom: 15px;
  ul {
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-left:20px; 
    width:161px;
    padding-bottom:20px;
  }
  li {
    list-style-type: none;
    span {
      text-transform: uppercase;
      color: #a0b0b9;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
    }
  }
`;

export const ButtonArea = styled.div`
  margin: 10px;
`;

export const Button = styled.button`
  width: 251px;
  height: 50px;
  background: ${props => props.selected ? '#2196f3' : 'white'};
  box-shadow: none;
  outline: none;
  border: 1px solid #dfe5ec;
  border-top-right-radius:5px;
  border-bottom-right-radius:5px;
  p {
    color: ${props => props.selected ? 'white' : '#4a4a4a'};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    padding-top: 15px;
    font-family: OpenSans;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
  }
`;

export const ButtonLeft = styled.button`
  width: 251px;
  height: 50px;
  background: ${props => props.selected ? '#2196f3' : 'white'};
  box-shadow: none;
  outline: none;
  border: 1px solid #dfe5ec;
  border-top-left-radius:5px;
  border-bottom-left-radius:5px;
  p {
    color: ${props => props.selected ? 'white' : '#4a4a4a'};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    padding-top: 15px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
  }
`;

