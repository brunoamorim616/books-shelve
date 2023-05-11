import { ReactNode } from 'react'
import { NYTimesBooksFullOverview } from './bestsellers-full-overview'

export type BooksContextValue = {
  bestSellersFullOverviewList: NYTimesBooksFullOverview
  listBooksBestSellersFullOverview: any
}

export type BooksProviderProps = {
  children: ReactNode
}
