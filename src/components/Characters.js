import styled from 'styled-components/macro'
import CharacterCard from './CharacterCard'

export default function Characters({ characters }) {
  return (
    <Container>
      {characters.map((character) => (
        <CharacterCard key={character.name} character={character} />
      ))}
    </Container>
  )
}

const Container = styled.ul`
  display: grid;
  font-family: sans-serif;
  gap: 8px;
  justify-content: center;
  padding: 0;
`
