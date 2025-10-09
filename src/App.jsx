import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Pokedex from './components/Pokedex'


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
        </Routes>
      </main>
    </div>
  )
}
