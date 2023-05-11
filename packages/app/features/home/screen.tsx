import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  XStack,
  YStack,
  useToastController,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useBooksAPI } from 'app/provider/books'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  const { listBooksBestSellersFullOverview, bestSellersFullOverviewList } = useBooksAPI()

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <H1
        onPress={() => {
          listBooksBestSellersFullOverview()
          console.log('hello')
        }}
      >
        {console.log(bestSellersFullOverviewList)}
        Hello, world!
      </H1>
    </YStack>
  )
}
