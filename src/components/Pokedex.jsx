import React from 'react'
import pokemon from './Pokemon'
import Pokecard from './Pokecard'

export default function Pokedex(props) {
  return (
    <div>
      <h2>Pokedex</h2>
      <div>
        {pokemon.map(p => (
          <Pokecard key={p.id} id={p.id} name={p.name}/>
        ))}

      </div>
    </div>
  )
}