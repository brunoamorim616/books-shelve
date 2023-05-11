import { CustomToast, TamaguiProvider, TamaguiProviderProps, ToastProvider } from '@my/ui'
import { useColorScheme } from 'react-native'

import { ToastViewport } from './tamagui/ToastViewport'
import config from '../tamagui.config'
import { useMemo } from 'react'
import { BooksProvider } from './books'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const scheme = useColorScheme()
  const themeColor = useMemo(() => scheme ?? 'light', [scheme])
  return (
    <TamaguiProvider config={config} disableInjectCSS defaultTheme={themeColor} {...rest}>
      <ToastProvider
        swipeDirection="horizontal"
        duration={6000}
        native={[
          /* uncomment the next line to do native toasts on mobile. NOTE: it'll require you making a dev build and won't work with Expo Go */
          'mobile',
        ]}
      >
        <BooksProvider>{children}</BooksProvider>
        <CustomToast />
        <ToastViewport />
      </ToastProvider>
    </TamaguiProvider>
  )
}
