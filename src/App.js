import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Blog from './pages/Blog';
import Login from './login_register/Login';
import Register from './login_register/Register';

import RouteTest from './components/RouteTest';

function App() {
  return ( 
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit' element={<Edit />} />
          {/*<Route path='/blog' element={<Blog />} /> //예외처리 부분 */}
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <br/>
        <RouteTest/>
      </div>
    </BrowserRouter>
  );
}

export default App;
