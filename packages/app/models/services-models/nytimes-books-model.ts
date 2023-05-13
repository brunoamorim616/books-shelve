import { BestSellers } from 'app/models'

export type NYTimesBooksResponse = {
  status: string
  copyright: string
  num_results: number
}

export type NYTimesBooksFullOverviewResponse = NYTimesBooksResponse & { results: BestSellers }

export type NYTimesBooksFullOverviewParams = {
  published_date?: string
}
