import styled from 'styled-components/macro'

export default function Characters({ characters }) {
  return (
    <Container>
      {console.log(characters)}
      {characters.map((character) => (
        <li key={character.name}>
          <img src={character.image} alt={character.name} />
          <div>{character.name}</div>
          <HouseContainer color={houseColor(character.house)}>
            {character.house}
          </HouseContainer>
        </li>
      ))}
    </Container>
  )

  function houseColor(houseName) {
    if (houseName === 'Gryffindor') return '#740001'
    if (houseName === 'Slytherin') return '#1A472A'
    if (houseName === 'Ravenclaw') return '#0E1A40'
    if (houseName === 'Hufflepuff') return '#FFDB00'
  }
}

const Container = styled.ul`
  color: #fff;
  display: grid;
  font-family: sans-serif;
  gap: 4px;
  justify-content: center;
  padding: 0;

  li {
    background: #17141d;
    border-radius: 5px;
    box-shadow: -1rem 0 3rem #000;
    list-style: none;
    padding: 20px 10px;
    text-align: center;
    transform: translateY(-0.5rem);
    transition: 0.2s ease-in;

    &:hover {
      transform: translateY(0.2rem);
    }
    &:hover + li {
      transform: translateX(10px);
    }
    li::not():first-child {
      margin-left: -10px;
    }

    img {
      width: 70px;
    }
  }
`

const HouseContainer = styled.div`
  background-color: ${(props) => props.color};
  color: ${(props) => (props.color === '#FFDB00' ? '#000' : '#FFF')};
`
