import pokemon from './Pokemon'
import Pokecard from './Pokecard'

export default function Pokedex(props) {
  return (
    <div>
      <h2 className="poketitle">Pokedex</h2>
      <div className="pokedex">
        {pokemon.map(p => (
          <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>
        ))}
      </div>
    </div>
  )
}