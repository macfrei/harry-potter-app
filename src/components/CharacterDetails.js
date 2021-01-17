export default function CharacterDetails({ character }) {
  return (
    <>
      <span>{character.name}</span>
      <span>{character.dateOfBirth}</span>
      <span>{character.gender}</span>
      <span>{character.patronus}</span>
      <span>{character.wand.core}</span>
    </>
  )
}
