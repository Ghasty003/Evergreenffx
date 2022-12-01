import React from 'react'
import { Route, Routes } from 'react-router-dom';
import '../src/styles/App.scss';
import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';
import DashBoardContent from './pages/DashBoardContent';
import DashboardSuspended from './pages/DashBoardSuspended';
import DashBoardWarning from './pages/DashBoardWarning';
import History from './pages/History';
import HistoryContent from './pages/HistoryContent';
import Login from './pages/Login';
import Referrals from './pages/Referral';
import ReferralContent from './pages/ReferralContent';
import Signup from './pages/Signup';
import Trade from './pages/Trade';
import TradeContent from './pages/TradeContent';
import TradeContentErr from './pages/TradeContentErr';
import TradeSubscribed from './pages/TradeSubscribed';
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
          <Route path='subscribed' element={<TradeSubscribed />} />
          <Route path='content' element={<TradeContent />} />
          <Route path='error' element={<TradeContentErr />} />
        </Route>
        <Route path='/history'>
          <Route index element={<History />} />
          <Route path='content' element={<HistoryContent />} />
        </Route>
        <Route path='/referrals'>
          <Route index element={<Referrals />} />
          <Route path='content' element={<ReferralContent />} />
        </Route>
     </Routes>
    </div>
  )
}

export default App
