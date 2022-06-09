import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shell from '../layouts'
import Detail from '../pages/Detail'
import Home from '../pages/Home'

const Routing = () => {
  return (
    <BrowserRouter>
      <Shell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Shell>
    </BrowserRouter>
  )
}

export default Routing
