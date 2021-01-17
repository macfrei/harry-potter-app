import { useState } from 'react'
import styled from 'styled-components'
import CharacterDetails from './CharacterDetails'

export default function CharacterCard({ character }) {
  const [transform, setTransform] = useState(false)

  return (
    <Card>
      <CardInner onClick={() => setTransform(!transform)} transform={transform}>
        <CardFront>
          <img src={character.image} alt={character.name} />
          <div>{character.name}</div>
          <HouseContainer color={houseColor(character.house)}>
            {character.house}
          </HouseContainer>
        </CardFront>
        <CardBack>
          <CharacterDetails character={character} />
        </CardBack>
      </CardInner>
    </Card>
  )

  function houseColor(houseName) {
    if (houseName === 'Gryffindor') return 'var(--gryffindor-primary)'
    if (houseName === 'Slytherin') return 'var(--slytherin-primary)'
    if (houseName === 'Ravenclaw') return 'var(--ravenclaw-primary)'
    if (houseName === 'Hufflepuff') return 'var(--hufflepuff-primary)'
  }
}

const Card = styled.li`
  background-color: transparent;
  width: 200px;
  height: 200px;
  list-style: none;

  img {
    width: 70px;
  }
`

const CardInner = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  ${(props) => props.transform && 'transform: rotateY(180deg)'}
`

const CardFront = styled.div`
  border-radius: 5px;
  box-shadow: -1rem 0 3rem #000;
  padding: 20px 10px;

  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`

const CardBack = styled.div`
  display: grid;
  border-radius: 5px;
  box-shadow: -1rem 0 3rem #000;
  padding: 20px 10px;
  background: #17141d;
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`

const HouseContainer = styled.div`
  background-color: ${(props) => props.color};
  color: ${(props) =>
    props.color === 'var(--hufflepuff-primary)' ? '#000' : '#FFF'};
`
