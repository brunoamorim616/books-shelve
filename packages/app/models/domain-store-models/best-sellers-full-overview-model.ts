import { Book } from 'app/models'

export type BestSellers = {
  bestsellers_date: string
  published_date: string
  published_date_description: string
  previous_published_date: string
  next_published_date: string
  lists: BestSellersList[]
}

export type BestSellersList = {
  list_id: number
  list_name: string
  list_name_encoded: string
  display_name: string
  updated: string
  list_image: string | null
  list_image_width: number | null
  list_image_height: number | null
  books: Book[]
}
