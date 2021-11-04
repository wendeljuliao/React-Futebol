import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <Router>

      <Routes>
        <Route exact path="/" component={Login}/>

        <Route exact path="/home" component={Home}/>

      </Routes>

    </Router>
  );
}

export default App;
