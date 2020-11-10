const PUBLIC_KEY = '5b38610f8b8f330eab7f7dbff323e2e8'

export const makeApiUrl = (path): string => {
  return `${process.env.API_URL}/${path}&api_key=${PUBLIC_KEY}&format=json`
}
