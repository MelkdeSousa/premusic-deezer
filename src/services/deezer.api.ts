import jsonp from 'fetch-jsonp'

const deezerAPI = async (resource: string) => await (await jsonp(`https://api.deezer.com/${resource}&output=jsonp`)).json()

export default deezerAPI
