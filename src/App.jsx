/* eslint-disable comma-dangle */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-array-index-key */

import React, { useState, useEffect } from 'react';
import './App.module.css';
import axios from 'axios';
import AviaSales from './Aviasales';

const App = () => {
  const [searchId, setSearchId] = useState('');
  const [stop, setStop] = useState(false);
  const [mainTickets, setMainTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://front-test.beta.aviasales.ru/search');
      setSearchId(result.data.searchId);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (searchId !== '') {
        try {
          const result = await axios(
            `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
          );
          setStop(result.data.stop);
          setMainTickets(mainTickets.concat(result.data.tickets));
        } catch (error) {
          if (error.message === 'Request failed with status code 500') {
            fetchData();
          }
        }
      }
    };
    if (stop === false) {
      fetchData();
    }
  }, [searchId, stop, mainTickets]);

  return <AviaSales ticketsList={mainTickets} stop={stop}/>;
};

export default App;
