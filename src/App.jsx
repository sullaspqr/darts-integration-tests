import './App.css';
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { DartsListPage } from "./DartsListPage";
import {DartsCreate} from "./DartsCreate";
import {DartsSingle} from "./DartsSingle";
import {DartsMod} from "./DartsMod";
import {DartsDel} from "./DartsDel";
import React from 'react';

export const App = () => {
  return (
    <Router>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
              <span className="nav-link">Dartsozók</span>
            </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/create-darts'} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                <span className="nav-link">Új dartsozó felvitele</span>
              </NavLink>
              </li>
        </ul>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<DartsListPage/>}/>
      <Route path="/darts/:dartsId" element={<DartsSingle/>}/>
      <Route path="/create-darts" element={<DartsCreate/>}/>
      <Route path="/del-darts/:dartsId" element={<DartsDel/>}/>
      <Route path="/mod-darts/:dartsId" element={<DartsMod/>}/>
    </Routes>
  </Router>
  );
};

 /*       */