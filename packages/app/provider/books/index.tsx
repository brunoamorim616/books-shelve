import { nytimesApi } from 'app/api'
import React, { ReactElement, createContext, useEffect, useRef, useState } from 'react'
import {
  BooksContextValue,
  BooksProviderProps,
  NYTimesBooksFullOverview,
  NYTimesBooksFullOverviewParams,
  NYTimesBooksFullOverviewResponse,
} from './types'

import { useToast } from 'app/hooks/useToast'

const BooksContext = createContext<BooksContextValue>({} as BooksContextValue)

export function BooksProvider(props: BooksProviderProps): ReactElement<BooksContextValue> {
  const bestSellersFullOverviewListRef = useRef<NYTimesBooksFullOverview>(
    {} as NYTimesBooksFullOverview
  )

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { errorToast } = useToast()

  const { children } = props

  const bestSellersFullOverviewList = bestSellersFullOverviewListRef.current

  function setBestSellersFullOverviewListRef(value: NYTimesBooksFullOverview) {
    if (!value) return
    bestSellersFullOverviewListRef.current = value
  }

  async function getListBooksBestSellersFullOverview(params?: NYTimesBooksFullOverviewParams) {
    try {
      setIsLoading(true)
      const response = await nytimesApi.get<NYTimesBooksFullOverviewResponse | null>(
        'lists/full-overview.json',
        params
      )
      return setBestSellersFullOverviewListRef(response.data as NYTimesBooksFullOverview)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    let subscribe = true

    if (subscribe) {
      getListBooksBestSellersFullOverview()
    }

    return () => {
      subscribe = false
    }
  }, [])

  return (
    <BooksContext.Provider
      value={{ bestSellersFullOverviewList, getListBooksBestSellersFullOverview, isLoading }}
    >
      {children}
    </BooksContext.Provider>
  )
}

export function useBooksAPI() {
  const value = React.useContext(BooksContext)
  return value
}
