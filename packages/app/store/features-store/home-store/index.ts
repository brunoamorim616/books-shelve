import { getListBooksBestSellersFullOverview } from 'app/services'
import { makeAutoObservable, runInAction } from 'mobx'
import { booksStore } from 'app/store/domain-store'
import { RequestStatus, HomeStoreModel, BestSellers } from 'app/models'

const initializer: HomeStoreModel = {
  requestStatus: 'pending',
  fetchBestSellers,
  getRequestStatus,
  setRequestStatus,
}

const store = makeAutoObservable(initializer)

function getRequestStatus() {
  return store.requestStatus
}

function setRequestStatus(name: RequestStatus) {
  store.requestStatus = name
}

async function fetchBestSellers(): Promise<void> {
  try {
    const data = await getListBooksBestSellersFullOverview()
    runInAction(() => {
      booksStore.setBestSellers(data?.results as BestSellers)
      store.setRequestStatus('success')
    })
  } catch (error) {
    runInAction(() => {
      store.setRequestStatus('error')
    })
  }
}

export default store
