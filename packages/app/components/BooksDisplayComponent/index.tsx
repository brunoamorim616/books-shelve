import { ScrollView, View } from 'react-native'
import React, { useMemo } from 'react'
import { H1, H4, Stack, YStack } from '@my/ui'
import { BooksCoverComponent } from '../BookCoverComponent'
import { BestSellersList } from 'app/models'

type BooksDisplayComponentProps = {
  booksList: BestSellersList
}

export function BooksDisplayComponent(props: BooksDisplayComponentProps) {
  const { booksList } = props

  const list = booksList?.books
  const listName = booksList?.display_name

  const renderBooks = useMemo(() => {
    if (!list) return

    return list.map((book, index) => {
      return (
        <Stack key={book?.primary_isbn13} space="$-1" mr={index === list.length - 1 ? 0 : '$3'}>
          <BooksCoverComponent source={{ uri: book?.book_image }} />
        </Stack>
      )
    })
  }, [list])

  return (
    <YStack>
      <H4>{listName}</H4>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {renderBooks}
      </ScrollView>
    </YStack>
  )
}
