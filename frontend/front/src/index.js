import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CSV_Export from './ExportCSV';
import Ships from './Ship';
import Membri from './Membru';
import reportWebVitals from './reportWebVitals';
import Membru from './Membru';
import NaveForm from './ShipsForm';
import {HashRouter, Routes, Route} from 'react-router-dom';
import CrewForm from './CrewForm';

ReactDOM.render(
  
  
  <HashRouter>
    <Routes>
    <Route path="/" element={<Ships />} />
    <Route path="/ships" element={<Ships />} />
    <Route path="/crewMembers" element={<Membru />} />
    <Route path="/ships/:navaId" element={<NaveForm />} />
    <Route path="/crewMembers/:crewId" element={<CrewForm />} />

    </Routes>
  </HashRouter>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
