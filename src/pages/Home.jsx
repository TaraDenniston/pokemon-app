import React from 'react'
import Logo from '../logo.svg'

export default function Home() {
  return (
    <div>
      <img src={Logo} alt="logo" width={96} />
      <h1>Home</h1>
      <p>Welcome to the Vite + React Router boilerplate.</p>
    </div>
  )
}
