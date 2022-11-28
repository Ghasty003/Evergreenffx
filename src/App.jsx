import React from 'react'
import { Route, Routes } from 'react-router-dom';
import '../src/styles/App.scss';
import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';
import DashBoardContent from './pages/DashBoardContent';
import DashboardSuspended from './pages/DashBoardSuspended';
import DashBoardWarning from './pages/DashBoardWarning';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Trade from './pages/Trade';
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
          <Route path='suspended' element={<DashboardSuspended />} />
          <Route path='content' element={<DashBoardContent />} />
        </Route>
        <Route path='/trade'>
          <Route index element={<Trade />} />
        </Route>
     </Routes>
    </div>
  )
}

export default App
