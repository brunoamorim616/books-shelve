import { YStack, Image } from '@my/ui'
import React from 'react'
import { ImageSourcePropType, StyleSheet } from 'react-native'

const bookH = 326 / 2.5
const bookW = 500 / 2.5

type BooksCoverComponentProps = {
  source: ImageSourcePropType
}

export const BooksCoverComponent = (props: BooksCoverComponentProps) => (
  <YStack w={bookH} h={bookW}>
    <Image style={StyleSheet.absoluteFill} source={props.source} borderRadius="$1" />
  </YStack>
)
