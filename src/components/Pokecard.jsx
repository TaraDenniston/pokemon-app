export default function Pokecard(props) {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
  return (
    <div>
      <h4>{props.name}</h4>
      <img src={url} alt={props.name} />

    </div>
  );
};
