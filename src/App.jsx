import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import PuppyCollection from './pages/PuppyCollection/PuppyCollection'
import PuppyDetailPage from './pages/PuppyDetail/PuppyDetailPage';




function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<PuppyCollection/>} />
        <Route path="/puppy/:id" element={<PuppyDetailPage/>} />
      </Routes>
    </Router>
  )
}

export default App
