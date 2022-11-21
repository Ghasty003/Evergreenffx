import React from 'react'
import { Route, Routes } from 'react-router-dom';
import '../src/styles/App.scss';
import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';
import DashBoardWarning from './pages/DashBoardWarning';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Verify from './pages/Verify';

function App() {

  return (
    <div className="App">
     <Routes>
        <Route path='/'>
          <Route index element={<CreateAccount />} />
          <Route path='signup' element={<Signup />} />
          <Route path='verify' element={<Verify />} />
          <Route path='login' element={<Login />} />
        </Route>
        <Route path='/dashboard'>
          <Route index element={<Dashboard />} />
          <Route path='warning' element={<DashBoardWarning />} />
        </Route>
     </Routes>
    </div>
  )
}

export default App
