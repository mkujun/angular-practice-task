import { Book } from "../book.model";

export class AddBook {
  static readonly type = '[Book] AddBook';
  constructor(public payload: Book) { }
}

export class DeleteBook {
  static readonly type = '[Book] DeleteBook';
  constructor(public payload: Book) { }
}

export class UpdateBook {
  static readonly type = '[Book] UpdateBook';
  constructor(public payload: {
    book: Book,
    index: number
  }) {}
}
