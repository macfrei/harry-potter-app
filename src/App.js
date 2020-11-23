import { useEffect, useState } from 'react';
import getCharacters from './services/getCharacters';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then((characters) => setCharacters(characters))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ul>
      {characters.map((character) => (
        <li key={character.name}>{character.name}</li>
      ))}
    </ul>
  );
}

export default App;
