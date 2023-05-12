import { create } from 'apisauce'
import { NYTIMES_API_URL } from 'app/config'
import secrets from '../../../secrets.json'

export const nytimesApi = create({
  baseURL: NYTIMES_API_URL,
  headers: { 'Content-Type': 'application/json' },
  params: { 'api-key': secrets.nytimes_api_key },
})

nytimesApi.addMonitor(({ problem, originalError, status }) => {
  if (problem || originalError || status) {
    console.log(status, problem, originalError?.message)
  }
})
