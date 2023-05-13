import React from 'react'
import { YStack, ScrollView, H2, Stack } from '@my/ui'
import { observer } from 'mobx-react-lite'
import { BooksDisplayComponent } from 'app/components'
import { homeStore, booksStore } from 'app/store'
import { ActivityIndicator, SafeAreaView } from 'react-native'
import { BestSellersList } from 'app/models'

export const HomeScreen = observer(() => {
  const { fetchBestSellers, getRequestStatus } = homeStore
  const { getBestSellers } = booksStore

  async function onMount() {
    await fetchBestSellers()
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onMount}>
      <YStack f={1} p="$4">
        <ScrollView gap="$10" showsVerticalScrollIndicator={false}>
          <H2 mb="$4">Book Shelves</H2>
          <YStack gap="$4">
            <Stack gap="$2">
              {getRequestStatus() === 'pending' ? (
                <ActivityIndicator />
              ) : (
                <BooksDisplayComponent booksList={getBestSellers().lists[0] as BestSellersList} />
              )}
            </Stack>
            {getRequestStatus() === 'pending' ? (
              <ActivityIndicator />
            ) : (
              <BooksDisplayComponent booksList={getBestSellers().lists[1] as BestSellersList} />
            )}
          </YStack>
        </ScrollView>
      </YStack>
    </SafeAreaView>
  )
})
