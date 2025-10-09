export default function Pokecard(props) {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
  return (
    <div className="card">
      <h4 className="card-name">{props.name}</h4>
      <img className="card-img" src={url} alt={props.name} />
      <ul className="card-stats">
        <li>Type: {props.type}</li>
        <li>EXP: {props.base_experience}</li>
      </ul>
    </div>
  );
};
