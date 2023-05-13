import { ErrorGuardProps } from './types'

export function ErrorGuard(props: ErrorGuardProps) {
  const { requestStatus, fallback, children } = props

  if (requestStatus === 'error') return fallback

  return children
}
