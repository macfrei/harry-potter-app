export default function Characters({ characters }) {
  return (
    <ul>
      {characters.map((character) => (
        <li key={character.name}>{character.name}</li>
      ))}
    </ul>
  );
}
