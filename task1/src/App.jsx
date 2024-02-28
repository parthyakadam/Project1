import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'
import CreateAccount from './components/CreateAccount'

function App() {
  return (
    <>
      <Router>        
        <Routes>
          <Route path='/register' element={<CreateAccount />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
