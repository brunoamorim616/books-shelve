import { nytimesApi } from 'app/api'
import React, { ReactElement, createContext, useEffect, useState } from 'react'
import {
  BooksContextValue,
  BooksProviderProps,
  NYTimesBooksFullOverview,
  NYTimesBooksFullOverviewParams,
  NYTimesBooksFullOverviewResponse,
} from './types'

import { useToast } from 'app/hooks/useToast'

const BooksContext = createContext<BooksContextValue>({} as BooksContextValue)

nytimesApi.addMonitor((monitor) => {
  const { problem } = monitor
  console.log(problem)
})

export function BooksProvider(props: BooksProviderProps): ReactElement<BooksContextValue> {
  const [bestSellersFullOverviewList, setBestSellersFullOverviewList] =
    useState<NYTimesBooksFullOverview>({} as NYTimesBooksFullOverview)
  const { errorToast } = useToast()

  const { children } = props

  async function listBooksBestSellersFullOverview(params?: NYTimesBooksFullOverviewParams) {
    const response = await nytimesApi.get<NYTimesBooksFullOverviewResponse | null>(
      'lists/full-overview.json',
      params
    )
    if (response.problem) {
      return errorToast(response.problem)
    }
    return setBestSellersFullOverviewList(response.data as NYTimesBooksFullOverview)
  }

  useEffect(() => {
    let subscribe = true

    if (subscribe) {
      listBooksBestSellersFullOverview()
    }

    return () => {
      subscribe = false
    }
  }, [])

  return (
    <BooksContext.Provider
      value={{ bestSellersFullOverviewList, listBooksBestSellersFullOverview }}
    >
      {children}
    </BooksContext.Provider>
  )
}

export function useBooksAPI() {
  const value = React.useContext(BooksContext)
  return value
}
