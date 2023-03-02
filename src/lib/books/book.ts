export type BookPayload = {
  title: string
  author: string
}

export type Book = BookPayload & {
  id: string
}
