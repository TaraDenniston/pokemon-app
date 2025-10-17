import '../styles/Pokecard.css'

export default function Pokecard(props) {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
  return (
    <div className="Pokecard">
      <h4 className="Pokecard-name">{props.name}</h4>
      <img className="Pokecard-img" src={url} alt={props.name} />
      <ul className="Pokecard-stats">
        <li>Type: {props.type}</li>
        <li>EXP: {props.base_experience}</li>
      </ul>
    </div>
  );
};
