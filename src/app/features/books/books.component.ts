import { Component } from '@angular/core';
import { Book } from './book.model';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AddBook, DeleteBook, UpdateBook } from './store/book.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: Observable<Book[]>;
  editMode = false;
  editIndex = -1;
  displayedColumns: string[] = ['no', 'title', 'author', 'edit', 'delete'];

  addBookForm = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required)
  })

  constructor(private store: Store) {
    this.books = this.store.select(state => state.book.books);
  }

  addBook() {
    if (this.editMode) {
      const book = new Book(
        this.addBookForm.value.title,
        this.addBookForm.value.author
      )

      this.store.dispatch(new UpdateBook({
        book,
        index: this.editIndex
      }))
    }

    else {
      this.store.dispatch(new AddBook(new Book(this.addBookForm.value.title, this.addBookForm.value.author)));
    }

    this.addBookForm.reset();
    this.editMode = false;
  }

  deleteBook(book: Book) {
    this.store.dispatch(new DeleteBook(book));
  }

  deleteAlert(deleteItem: boolean, book: Book) {
    if (deleteItem) {
      this.deleteBook(book);
    }
  }

  editBook(book: Book, i: number) {
    this.editMode = true;
    this.editIndex = i;

    this.addBookForm.setValue({
      title: book.title,
      author: book.author
    })
  }
}
