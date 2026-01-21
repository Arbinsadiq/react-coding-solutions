import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Counter from './problems/Day01/Counter'
import Accordion from './problems/Day02/Accordion'
import LeapYear from './problems/Day03/LeapYear'
import AutoSaveText from './problems/Day04/AutoSaveText'
import ZigZagStringConverter from './problems/Day05/ZigZagStringConverter'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Solved Problems</h1>} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Accordion" element={<Accordion />} />
        <Route path="/LeapYear" element={<LeapYear />} />
        <Route path="/AutoSaveText" element={<AutoSaveText />} />
        <Route path="/ZigZagStringConverter" element={<ZigZagStringConverter />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
