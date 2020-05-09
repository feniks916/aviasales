/* eslint-disable no-nested-ternary */
/* eslint-disable id-length */
/* eslint-disable react/button-has-type */
/* eslint-disable object-curly-newline */
/* eslint-disable arrow-parens */

import React, { useState } from 'react';
import { Checkbox } from 'antd';
import {
  TicketsArea,
  ButtonLeft,
  Button,
  ButtonArea,
  PriceArea,
  DescriptionArea,
  FirstPoint,
  SecondPoint,
} from './styles';
import { CheckboxArea, CheckboxItem, CheckboxSpan, CheckText } from './checkbox';
import classes from './App.module.scss';
import logo from './Logo.svg'

const AviaSales = props => {
  const [blueColor, setblueColor] = useState({
    first: true,
    second: false,
  })
  const [stopsInTicketValue, setStopsIncludedValue] = useState({
    stopsInTicketValue: 1,
  });
  console.log(stopsInTicketValue)
  const [checkedCheckboxValue, setcheckedCheckboxValue] = useState([]);
  if(checkedCheckboxValue.length > 3 && !checkedCheckboxValue.includes(5)){
    setcheckedCheckboxValue([1,2,3,4,5])
  }
  
  const [data, setData] = useState([]);

  let { ticketsList } = props;
  const checkbox = [
    { key: 1, id: 1, value: 'Без остановок', steps: 0 },
    { key: 2, id: 2, value: '1 остановка', steps: 1 },
    { key: 3, id: 3, value: '2 остановки', steps: 2 },
    { key: 4, id: 4, value: '3 остановки', steps: 3 },
    { key: 5, id: 5, value: 'Все', steps: 5 },
  ];

  const filterValue = checkedCheckboxValue;

  let checkboxArrayCopy = [];
  const handleSelectCheckbox = num => {
    setData([]);
    const currentIndex = checkedCheckboxValue.indexOf(num);
    checkboxArrayCopy = [...checkedCheckboxValue];

    if (currentIndex === -1) {
      checkboxArrayCopy.push(num);
    }
    else {
      checkboxArrayCopy.splice(currentIndex, 1);
    }

    setcheckedCheckboxValue(checkboxArrayCopy);

    const sorted = checkboxArrayCopy.sort((a, b) => b - a);
    if (sorted.length === 0) {
      sorted[0] = 1;
    }
    setStopsIncludedValue({
      ...stopsInTicketValue,
      stopsInTicketValue: sorted[0] - 1,
    });
  };

  const handleSelectAll = num => {
    const currentIndex = checkedCheckboxValue.indexOf(num);
    if (currentIndex === -1) {
      checkboxArrayCopy.push(1,2,3,4,5);
    }

    setcheckedCheckboxValue(checkboxArrayCopy);
  }

  const number = stopsInTicketValue.stopsInTicketValue;
  let renderingData = [];

  const handleCheapiest = () => {
    setblueColor({
      first: true,
      second: false,
    })
    setStopsIncludedValue({
      ...stopsInTicketValue,
      stopsInTicketValue: number,
    });
    let cheapData = [...data];
    cheapData = arr.sort((a, b) => a.price - b.price).splice(0, 5);
    setData(cheapData);
  };

  const handleQuickliest = () => {
    setblueColor({
      first: false,
      second: true,
    })
    setStopsIncludedValue({
      ...stopsInTicketValue,
      stopsInTicketValue: number,
    });
    let quickData = [...data];
    quickData = arr.sort(
      (a, b) => a.timeForward + a.timeToward - (b.timeForward + b.timeToward)
    ).splice(0, 5);
    setData(quickData);
  };

  let arr = [];

  arr = ticketsList.map((el, index) => (
    {
      id: index,
      price: el.price,
      company: `//pics.avs.io/99/36/{${el.carrier}}.png`,
      forward: `${el.segments[0].origin}-${el.segments[0].destination}`,
      toward: `${el.segments[1].origin}-${el.segments[0].destination}`,
      timeForward: el.segments[0].duration,
      hours: Math.floor(el.segments[0].duration / 60) >= 24
        ? Number(el.segments[0].date
          .split('T')[1]
          .split('.')[0]
          .split(':')
          .splice(0, 1)) + Number(Math.floor(el.segments[0].duration / 60) - 24)
        : Number(el.segments[0].date
          .split('T')[1]
          .split('.')[0]
          .split(':')
          .splice(0, 1)) + Math.floor(el.segments[0].duration / 60),
      timeToward: el.segments[1].duration,
      hoursBack: Math.floor(el.segments[1].duration / 60) >= 24
        ? Number(el.segments[1].date
          .split('T')[1]
          .split('.')[0]
          .split(':')
          .splice(0, 1)) + Number(Math.floor(el.segments[1].duration / 60) - 24)
        : Number(el.segments[1].date
          .split('T')[1]
          .split('.')[0]
          .split(':')
          .splice(0, 1)) + Math.floor(el.segments[1].duration / 60),
      stepsForward: el.segments[0].stops.length,
      stepsToward: el.segments[1].stops.length,
      stepsForwardCities: el.segments[0].stops.join(', '),
      stepsTowardCities: el.segments[1].stops.join(', '),
      filter: Number(
        el.segments[0].stops.length + el.segments[1].stops.length,
      ),
      data: el.segments[0].date
        .split('T')[1]
        .split('.')[0]
        .split(':')
        .splice(0, 2),
      endpointTimeH: Number(el.segments[0].date
        .split('T')[1]
        .split('.')[0]
        .split(':')
        .splice(0, 1)),
      endpointTimeM: Number(el.segments[0].date
        .split('T')[1]
        .split('.')[0]
        .split(':')
        .splice(1, 1)),
      endpointTimeHBack: Number(el.segments[1].date
        .split('T')[1]
        .split('.')[0]
        .split(':')
        .splice(0, 1)),
      endpointTimeMBack: Number(el.segments[1].date
        .split('T')[1]
        .split('.')[0]
        .split(':')
        .splice(1, 1))
    }
  ));


  let filter = arr.filter(e => e.stepsForward + e.stepsToward === number);

  if (filterValue.length > 1) {
    const firstPart = arr.filter(item => item.filter === filterValue[0] - 1).slice(0, 3);
    const secondPart = arr
      .filter(item => item.filter === filterValue[filterValue.length - 1] - 1)
      .slice(0, 2)
      .concat(firstPart);
    filter = secondPart;
  }

  if (filterValue.length > 2) {
    const firstPart = arr.filter(item => item.filter === filterValue[0] - 1).slice(0, 2);
    const secondPart = arr
      .filter(item => item.filter === filterValue[filterValue.length - 1] - 1)
      .slice(0, 1)
      .concat(firstPart);
    const thirdPart = arr
      .filter(item => item.filter === filterValue[filterValue.length - 2] - 1)
      .slice(0, 2)
      .concat(secondPart);
    filter = thirdPart;
  }

  if (number > 3) {
    filter = arr.filter(e => e.stepsForward + e.stepsToward <= number);
  }

  for (let i = 0; i < 5; i++) {
    renderingData.push(filter[i]);
  }

  if (data.length > 0) {
    renderingData = data;
  }
  const mappedTickets = renderingData.filter(e => e !== undefined);

  const final = mappedTickets.map(el => (
    {
      id: el.id,
      hours: Math.floor(el.timeForward / 60),
      hoursBack: Math.floor(el.timeToward / 60),
      minutes: el.timeForward
        - Math.floor(el.timeForward / 60) * 60,
      minutesBack: el.timeToward
        - Math.floor(el.timeToward / 60) * 60,
      forward: el.forward,
      toward: el.toward,
      timeForward: el.timeForward,
      timeToward: el.timeToward,
      stepsForwardCities: el.stepsForwardCities,
      stepsTowardCities: el.stepsTowardCities,
      endpointTimeH: el.endpointTimeH >= 10 ? el.endpointTimeH : `0${el.endpointTimeH}`,
      endpointTimeHBack: el.endpointTimeHBack >= 10 ? el.endpointTimeHBack : `0${el.endpointTimeHBack}`,
      endpointTimeM: el.endpointTimeM >= 10 ? el.endpointTimeM : `0${el.endpointTimeM}`,
      endpointTimeMBack: el.endpointTimeMBack >= 10 ? el.endpointTimeMBack : `0${el.endpointTimeMBack}`,
      Hdur: (el.timeForward - Math.floor(el.timeForward / 60) * 60)
        + el.endpointTimeM >= 60 && el.hours >= 24
        ? el.hours - 23
        : el.hours >= 24
          ? el.hours - 24
          : (el.timeForward - Math.floor(el.timeForward / 60) * 60)
            + el.endpointTimeM >= 60
            ? el.hours + 1
            : el.hours,
      HdurBack: (el.timeToward - Math.floor(el.timeToward / 60) * 60)
        + el.endpointTimeMBack >= 60 && el.hoursBack >= 24
        ? el.hoursBack - 23
        : el.hoursBack >= 24
          ? el.hoursBack - 24
          : (el.timeToward - Math.floor(el.timeToward / 60) * 60)
            + el.endpointTimeMBack >= 60
            ? el.hoursBack + 1
            : el.hoursBack,
      Mdur: (el.timeForward - Math.floor(el.timeForward / 60) * 60)
        + el.endpointTimeM >= 60
        ? ((el.timeForward - Math.floor(el.timeForward / 60) * 60)
          + el.endpointTimeM) - 60
        : (el.timeForward - Math.floor(el.timeForward / 60) * 60)
        + el.endpointTimeM,
      MdurBack: (el.timeToward - Math.floor(el.timeToward / 60) * 60)
        + el.endpointTimeMBack >= 60
        ? ((el.timeToward - Math.floor(el.timeToward / 60) * 60)
          + el.endpointTimeMBack) - 60
        : (el.timeToward - Math.floor(el.timeToward / 60) * 60)
        + el.endpointTimeMBack,
      price: el.price,
      company: el.company,
    }
  ))

  if (arr.length !== 0) {
    return (
      <div className={classes.body}>
        <CheckboxArea>
          <CheckText>Количество остановок</CheckText>
          {checkbox.map(el => (
            <CheckboxItem>
              <CheckboxSpan>
                {el.key < 5 ? <Checkbox onClick={() => handleSelectCheckbox(el.id)} checked={checkedCheckboxValue.indexOf(el.id) !== -1}>
                  {el.value}
                </Checkbox> : <Checkbox onClick={() => handleSelectAll(el.id)} checked={checkedCheckboxValue.indexOf(el.id) !== -1} > {el.value}</Checkbox > }
              </CheckboxSpan>
            </CheckboxItem>
          ))}
        </CheckboxArea>
            <div className={classes.wrapper}>
              <img className={classes.img} src={logo} alt=""/>
              <ButtonArea>
                <ButtonLeft selected={blueColor.first} onClick={handleCheapiest}>
                  <p>Самый дешевый</p>
                </ButtonLeft>
                <Button selected={blueColor.second} onClick={handleQuickliest}>
                  <p>Самый быстрый</p>
                </Button>
              </ButtonArea>
              {final.map(el => (
                <TicketsArea key={el.id}>
                  <PriceArea>
                    <p>{`${el.price} P`}</p>
                    <img src={el.company} alt="" />
                  </PriceArea>
                  <DescriptionArea>
                    <FirstPoint>
                      <ul>
                        <li>
                          <span>{el.forward}</span>
                        </li>
                        <li>
                          {`${el.endpointTimeH}:${el.endpointTimeM} - ${el.Hdur < 10 ? `0${el.Hdur}` : el.Hdur}:${ el.Mdur >= 10 ? el.Mdur : `0${el.Mdur}`}`}
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span>в пути</span>
                        </li>
                        <li>
                          {`${el.hours < 10 ? `0${el.hours}` : el.hours}ч ${el.minutes < 10 ? `0${el.minutes}` : el.minutes}м`}
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span>Пересадки</span>
                        </li>
                        <li>{el.stepsForwardCities.length > 0 ? el.stepsForwardCities : 'Нет'}</li>
                      </ul>
                    </FirstPoint>
                    <SecondPoint>
                      <ul>
                        <li>
                          <span>{el.toward}</span>
                        </li>
                        <li>
                          {`${el.endpointTimeHBack}:${el.endpointTimeMBack} - ${el.HdurBack < 10 ? `0${el.HdurBack}` : el.HdurBack}:${ el.MdurBack >= 10 ? el.MdurBack : `0${el.MdurBack}`}`}
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span>в пути</span>
                        </li>
                        <li>
                          {`${el.hoursBack < 10 ? `0${el.hoursBack}` : el.hoursBack}ч  ${el.minutesBack < 10 ? `0${el.minutesBack}` : el.minutesBack}м`}
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span>Пересадки</span>
                        </li>
                        <li>{el.stepsTowardCities.length > 0 ? el.stepsTowardCities : 'Нет'}</li>
                      </ul>
                    </SecondPoint>
                  </DescriptionArea>
                </TicketsArea>
              ))}
            </div>
      </div>
    );
  }
  return 'please wait';
};
export default AviaSales;
