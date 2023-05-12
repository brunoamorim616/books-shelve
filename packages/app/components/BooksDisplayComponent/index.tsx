import { ScrollView, View } from 'react-native'
import React, { useMemo } from 'react'
import { BestSellersList, Book, NYTimesBooksFullOverview } from 'app/provider/books/types'
import { H2, H3, H4, Stack } from '@my/ui'
import { BooksCoverComponent } from '../BookCoverComponent'

type BooksDisplayComponentProps = {
  booksList: BestSellersList
}

export function BooksDisplayComponent(props: BooksDisplayComponentProps) {
  const { booksList } = props

  const list = booksList?.books
  const listName = booksList?.display_name

  const renderBooks = useMemo(() => {
    console.log(list)
    if (!list) return

    return list.map((book, index) => {
      return (
        <Stack key={book?.primary_isbn10} space="$-1" mr={index === list.length - 1 ? 0 : '$3'}>
          <BooksCoverComponent source={{ uri: book?.book_image }} />
        </Stack>
      )
    })
  }, [booksList])

  return (
    <>
      <H4>{listName}</H4>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {renderBooks}
      </ScrollView>
    </>
  )
}
