import { create } from 'apisauce'
import { NYTIMES_API_URL } from 'app/config'

export const nytimesApi = create({
  baseURL: NYTIMES_API_URL,
  headers: { 'Content-Type': 'application/json' },
})
