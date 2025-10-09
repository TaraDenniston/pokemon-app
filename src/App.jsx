import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Pokedex from './components/Pokedex'


export default function App() {
  return (
    <div className="app">
      <main className="main">
        <Routes>
          <Route path="/" element={<Pokedex />} />
        </Routes>
      </main>
    </div>
  )
}
