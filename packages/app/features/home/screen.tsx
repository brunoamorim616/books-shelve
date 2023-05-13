import React from 'react'
import { YStack, ScrollView, H2, Stack } from '@my/ui'
import { observer } from 'mobx-react-lite'
import { BooksDisplayComponent } from 'app/components'
import { homeStore, booksStore } from 'app/store'
import { SafeAreaView } from 'react-native'

export const HomeScreen = observer(() => {
  const { fetchBestSellers } = homeStore
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
            {getBestSellers()?.lists?.map((list, index) => (
              <Stack gap="$2" key={`${list.list_id}`}>
                <BooksDisplayComponent booksList={list} />
              </Stack>
            ))}
          </YStack>
        </ScrollView>
      </YStack>
    </SafeAreaView>
  )
})
