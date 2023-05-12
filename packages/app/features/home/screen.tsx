import { H1, YStack, ScrollView, H2, Stack, Section, Separator } from '@my/ui'

import { BooksDisplayComponent } from 'app/components'

import { useBooksAPI } from 'app/provider/books'
import { Book } from 'app/provider/books/types'
import React from 'react'
import { ActivityIndicator, SafeAreaView } from 'react-native'

export function HomeScreen() {
  const { bestSellersFullOverviewList, isLoading } = useBooksAPI()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack f={1} p="$4">
        <ScrollView gap="$10" showsVerticalScrollIndicator={false}>
          <H2 mb="$4">Book Shelves</H2>
          <YStack gap="$4">
            <Stack gap="$2">
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <BooksDisplayComponent booksList={bestSellersFullOverviewList?.results?.lists[0]} />
              )}
            </Stack>
            <Stack gap="$2">
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <BooksDisplayComponent booksList={bestSellersFullOverviewList?.results?.lists[1]} />
              )}
            </Stack>
          </YStack>
        </ScrollView>
      </YStack>
    </SafeAreaView>
  )
}
