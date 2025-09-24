import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Pokedex from './pages/Pokedex'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <div className="app">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <main className="main">
        <Routes>
          <Route path="/" element={<Pokedex />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
