import { RequestStatus } from 'app/models'

export type HomeStoreModel = {
  requestStatus: RequestStatus
  setRequestStatus: (name: RequestStatus) => void
  getRequestStatus: () => RequestStatus
  fetchBestSellers: () => Promise<void>
}
