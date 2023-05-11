import { useToastController } from '@my/ui'

export function useToast() {
  const toast = useToastController()

  function errorToast(title: string, message?: string) {
    toast.show(title, {
      message,
      burntOptions: { preset: 'error' },
      notificationOptions: {
        icon: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconpacks.net%2Ffree-icon%2Ferror-905.html&psig=AOvVaw0fvEzyaMPbuPMbtTZF4ABL&ust=1683858776867000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNjlx_Oc7P4CFQAAAAAdAAAAABAE',
      },
    })
  }
  return { errorToast }
}
