import { create } from 'apisauce'
import { NYTIMES_API_URL } from 'app/config'
import secrets from '../../../secrets.json'

export const nytimesApi = create({
  baseURL: NYTIMES_API_URL,
  headers: { 'Content-Type': 'application/json' },
  params: { 'api-key': secrets.nytimes_api_key },
})

nytimesApi.addResponseTransform((response) => {
  if (response?.status && response?.status > 299) throw new Error(response?.problem)
  else return response
})
