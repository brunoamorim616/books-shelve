import { BestSellers } from 'app/models'

export type BooksStoreModel = {
  bestSellers: BestSellers
  getBestSellers: () => BestSellers
  setBestSellers: (data: BestSellers) => void
}
