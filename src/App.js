import { useEffect, useState } from 'react'
import getCharacters from './services/getCharacters'
import Characters from './components/Characters'
import styled from 'styled-components/macro'

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharacters()
      .then((characters) => setCharacters(characters))
      .catch((error) => console.error(error.message))
  }, [])

  return (
    <Container>
      <h1>Characters:</h1>
      <Characters characters={characters} />
    </Container>
  )
}

export default App

const Container = styled.div`
  background: #17141d;
  color: ivory;
  margin: 0;
  text-align: center;

  h1 {
    margin: 0;
    padding: 5px;
  }
`
