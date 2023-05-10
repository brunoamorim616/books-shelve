import { CustomToast, TamaguiProvider, TamaguiProviderProps, ToastProvider } from '@my/ui'
import { useColorScheme } from 'react-native'

import { ToastViewport } from './ToastViewport'
import config from '../../tamagui.config'
import { useMemo } from 'react'

export function Tamagui({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const scheme = useColorScheme()
  const themeColor = useMemo(() => (scheme === 'dark' ? 'dark' : 'light'), [scheme])
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
        {children}

        <CustomToast />
        <ToastViewport />
      </ToastProvider>
    </TamaguiProvider>
  )
}
