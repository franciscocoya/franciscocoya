export async function readJSON(fileName) {
  const data = await fetch(fileName)
  return data.json()
}
