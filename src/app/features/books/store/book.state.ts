import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { AddBook, DeleteBook, UpdateBook } from './book.actions';
import { Book } from '../book.model';

export interface BookStateModel {
  books: Book[];
}

@State<BookStateModel>({
  name: 'book',
  defaults: {
    books: [
      new Book("Dune", "Frank Herbert"),
      new Book("Dune Messiah", "Frank Herbert"),
      new Book("Children of Dune", "Frank Herbert"),
      new Book("It", "Stephen King"),
      new Book("Ulysses", "James Joyce"),
      new Book("Don Quixote", "Miguel de Cervantes"),
      new Book("The Bat", "Jo Nesbo"),
      new Book("Knife", "Jo Nesbo"),
      new Book("Snowman", "Jo Nesbo"),
      new Book("Nemesis" , "Jo Nesbo")
    ]
  }
})

@Injectable()
export class BookState {
  @Action(AddBook)
  addBook(context: StateContext<BookStateModel>, action: AddBook) {
    const state = context.getState();

    context.setState({
        books: [...state.books, action.payload]
    });
  }

  @Action(DeleteBook)
  deleteBook(context: StateContext<BookStateModel>, action: DeleteBook) {
    const state = context.getState();
    const filteredArray = state.books.filter(b => b !== action.payload);

    context.setState({
      ...state,
      books: filteredArray
    })
  }

  @Action(UpdateBook)
  updateBook(context: StateContext<BookStateModel>, action: UpdateBook) {
    const state = context.getState();

    const updatedBooks = [...state.books];
    updatedBooks[action.payload.index] = action.payload.book;

    context.setState({
      ...state,
      books: updatedBooks
    })
  }

  @Selector()
  static getBooks(state: BookStateModel) {
    return state.books;
  }
}


