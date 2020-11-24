import styled from 'styled-components/macro'

export default function Characters({ characters }) {
  return (
    <Container>
      {characters.map((character) => (
        <li key={character.name}>
          <div>{character.name}</div>
          <div>{character.house}</div>
          <img src={character.image} alt={character.name} />
        </li>
      ))}
    </Container>
  )
}

const Container = styled.ul`
  color: #fff;
  display: grid;
  font-family: sans-serif;
  gap: 4px;
  padding: 0;

  li {
    background: #17141d;
    box-shadow: -1rem 0 3rem #000;
    list-style: none;
    padding: 10px;
    text-align: center;
    width: 70%;

    img {
      width: 50px;
    }
  }
`
