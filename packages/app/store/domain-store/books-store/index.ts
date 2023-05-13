import { BestSellers, BooksStoreModel } from 'app/models'
import { makeAutoObservable } from 'mobx'

const initializer: BooksStoreModel = {
  bestSellers: {} as BestSellers,
  getBestSellers,
  setBestSellers,
}

const store = makeAutoObservable(initializer)

function getBestSellers() {
  return store.bestSellers
}

function setBestSellers(data: BestSellers) {
  store.bestSellers = data
}

export default store
