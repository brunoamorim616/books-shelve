import { RequestStatus } from 'app/models'
import { JSXElementConstructor, ReactElement, ReactNode } from 'react'

export type ErrorGuardProps = {
  requestStatus: RequestStatus
  fallback: ReactElement
  children: ReactElement
}

export type ErrorGuardForwardedProps = Pick<ErrorGuardProps, 'requestStatus'>
