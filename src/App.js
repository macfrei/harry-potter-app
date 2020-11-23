import { useEffect, useState } from 'react';
import getCharacters from './services/getCharacters';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then((characters) => setCharacters(characters))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>Characters:</h1>
      <Characters characters={characters} />
    </>
  );
}

export default App;
