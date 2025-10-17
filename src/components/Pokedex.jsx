import pokemon from './Pokemon'
import Pokecard from './Pokecard'
import '../styles/Pokedex.css'

export default function Pokedex(props) {
  return (
    <div className="Pokedex-container">
      <h2 className="Pokedex-title">Pokedex</h2>
      <div className="Pokedex-cards">
        {pokemon.map(p => (
          <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>
        ))}
      </div>
    </div>
  )
}