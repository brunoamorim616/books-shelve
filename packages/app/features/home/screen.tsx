import { H1, YStack, ScrollView, H2, Stack, Section } from '@my/ui'

import { BooksDisplayComponent } from 'app/components'

import { useBooksAPI } from 'app/provider/books'
import { Book } from 'app/provider/books/types'
import React from 'react'
import { SafeAreaView } from 'react-native'

export function HomeScreen() {
  const { bestSellersFullOverviewList } = useBooksAPI()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack f={1} p="$4">
        <ScrollView gap="$2" showsVerticalScrollIndicator={false}>
          <H1>Book Shelves</H1>
          <YStack gap="$5">
            <Stack gap="$2">
              <H2>Best Sellers</H2>
              <BooksDisplayComponent
                booksList={bestSellersFullOverviewList?.results?.lists[0]?.books}
              />
            </Stack>
            <Stack gap="$2">
              <H2>Best Sellers</H2>
              <BooksDisplayComponent
                booksList={bestSellersFullOverviewList?.results?.lists[1]?.books}
              />
            </Stack>
            <Stack gap="$2">
              <H2>Best Sellers</H2>
              <BooksDisplayComponent
                booksList={bestSellersFullOverviewList?.results?.lists[2]?.books}
              />
            </Stack>
            <Stack gap="$2">
              <H2>Best Sellers</H2>
              <BooksDisplayComponent
                booksList={bestSellersFullOverviewList?.results?.lists[3]?.books}
              />
            </Stack>
          </YStack>
        </ScrollView>
      </YStack>
    </SafeAreaView>
  )
}
