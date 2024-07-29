import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Main from './Main'
import Ds from './pages/semesters/sem2/Ds'
import Oop from './pages/semesters/sem2/Oop'
import Mp from './pages/semesters/sem2/Mp'
import MathsI from './pages/semesters/sem2/MathsI'
import StatI from './pages/semesters/sem2/StatI'
import First from './pages/homepages/First'
import Second from './pages/homepages/Second'
import Third from './pages/homepages/Third'
import Fourth from './pages/homepages/Fourth'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/first-semester/" element={<First />} />
        <Route path="/second-semester/" element={<Second />} />
        <Route path="/third-semester/" element={<Third />} />
        <Route path="/fourth-semester/" element={<Fourth />} />
        <Route path="/second-semester/ds/" element={<Ds />} />
        <Route path="/second-semester/oop/" element={<Oop />} />
        <Route path="/second-semester/mp/" element={<Mp />} />
        <Route path="/second-semester/mathsI/" element={<MathsI />} />
        <Route path="/second-semester/statI/" element={<StatI />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
