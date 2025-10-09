import pokemon from './Pokemon'

export default function Cards(props) {
  return (
    <div>
      {pokemon.map(p => (
        <div key={p.id}>
          <h4>{p.name}</h4>
        </div>
      ))}
    </div>
  );
};
