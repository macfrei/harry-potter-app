export default async function getCharacters() {
  // return fetch('https://hp-api.herokuapp.com/api/characters').then((data) =>
  //   data.json()
  // )

  try {
    const response = await fetch('https://hp-api.herokuapp.com/api/characters')
    const characters = await response.json()
    console.log(characters)
    return { result: characters, error: false }
  } catch {
    return { result: [], error: true }
  }
}
