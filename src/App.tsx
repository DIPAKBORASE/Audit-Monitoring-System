import React from 'react'
import { Outlet } from '@tanstack/react-router'
// import Sidebar from './components/Sidebar'
// import GlobalCountrySelection from './components/GlobalCountrySelection'
// import LoginPage from './components/Auth/login'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
    <div className="flex">
      {/* <LoginPage /> */}
      {/* <Sidebar /> */}
      <div className="flex-1">
        {/* <GlobalCountrySelection /> */}
        <Outlet /> {/* This is where child routes will be rendered */}
      </div>
    </div>
    </>
  )
}

export default App