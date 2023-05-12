import { ScrollView, View } from 'react-native'
import React, { useMemo } from 'react'
import { Book } from 'app/provider/books/types'
import { Stack } from '@my/ui'
import { BooksCoverComponent } from '../BookCoverComponent'

type BooksDisplayComponentProps = {
  booksList: Book[]
}

export function BooksDisplayComponent(props: BooksDisplayComponentProps) {
  const { booksList } = props

  const renderBooks = useMemo(() => {
    if (!booksList) return
    //
    return booksList.map((book, index) => {
      return (
        <Stack
          key={book?.primary_isbn10}
          space="$-1"
          mr={index === booksList.length - 1 ? 0 : '$3'}
        >
          <BooksCoverComponent source={{ uri: book?.book_image }} />
        </Stack>
      )
    })
  }, [booksList])

  return (
    <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
      {renderBooks}
    </ScrollView>
  )
}
