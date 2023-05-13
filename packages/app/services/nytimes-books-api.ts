import { nytimesApi } from 'app/api'
import {
  NYTimesBooksFullOverviewParams,
  NYTimesBooksFullOverviewResponse,
} from 'app/models/services-models'

export async function getListBooksBestSellersFullOverview(params?: NYTimesBooksFullOverviewParams) {
  try {
    //   setIsLoading(true)
    const { data } = await nytimesApi.get<NYTimesBooksFullOverviewResponse | null>(
      'lists/full-overview.json',
      params
    )
    return data as NYTimesBooksFullOverviewResponse
  } catch (error) {
    // Todo -> Create a request Monitor to handle erros and show toast message
    console.log(error)
    throw new Error(error)
  } finally {
    //   setIsLoading(false)
  }
}
