import { nytimesApi } from 'app/api'
import {
  NYTimesBooksFullOverviewParams,
  NYTimesBooksFullOverviewResponse,
} from 'app/models/services-models'

export async function getListBooksBestSellersFullOverview(params?: NYTimesBooksFullOverviewParams) {
  try {
    const { data } = await nytimesApi.get<NYTimesBooksFullOverviewResponse | null>(
      'lists/full-overview.json',
      params
    )
    return data as NYTimesBooksFullOverviewResponse
  } catch (error) {
    throw new Error(error)
  }
}
