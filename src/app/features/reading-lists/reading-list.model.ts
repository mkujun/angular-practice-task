import { Book } from "../books/book.model";

export class ReadingList {
  title: string;
  books: Book[];

  constructor(title: string, books: Book[]) {
    this.title = title;
    this.books = books;
  }
}
