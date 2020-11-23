export default function getCharacters() {
  return fetch('http://hp-api.herokuapp.com/api/characters').then((res) =>
    res.json()
  );
}
