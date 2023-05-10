import React, { createContext, useContext } from 'react'

type BooksContextValue = {}

const BooksContext = createContext<BooksContextValue>({} as BooksContextValue)

export function useBooksAPI(props) {
  const { children } = props
  const {} = useContext(BooksContext)
}
