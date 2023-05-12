import { ReactNode } from 'react'
import {
  NYTimesBooksFullOverview,
  NYTimesBooksFullOverviewParams,
} from './bestsellers-full-overview'

export type BooksContextValue = {
  bestSellersFullOverviewList: NYTimesBooksFullOverview
  isLoading: boolean
  getListBooksBestSellersFullOverview: (params?: NYTimesBooksFullOverviewParams) => Promise<void>
}

export type BooksProviderProps = {
  children: ReactNode
}
