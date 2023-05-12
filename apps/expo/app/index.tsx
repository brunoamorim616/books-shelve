import { HomeScreen } from 'app/features/home/screen'
import { Stack } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function Screen() {
  const { top } = useSafeAreaInsets()
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <HomeScreen />
    </>
  )
}
