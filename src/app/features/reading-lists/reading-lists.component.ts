import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../books/book.model';
import { ReadingList } from './reading-list.model';
import { Store } from '@ngxs/store';
import { AddReadingList, UpdateReadingList, DeleteReadingList } from './store/reading-lists.actions';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reading-lists',
  templateUrl: './reading-lists.component.html',
  styleUrls: ['./reading-lists.component.css']
})
export class ReadingListsComponent {
  readingLists: Observable<ReadingList[]>;
  books: Observable<Book[]>;
  selectedBooks = new FormControl();

  addReadingListForm = new FormGroup({
    title: new FormControl('')
  })

  constructor(private store: Store) {
    this.books = this.store.select(state => state.book.books);
    this.readingLists = this.store.select(state => state.readingList.readingLists);
  }

  deleteAlert(deleteItem: boolean, readingList: ReadingList) {
    if (deleteItem) {
      this.deleteReadingList(readingList);
    }
  }

  deleteReadingList(readingList: ReadingList) {
    this.store.dispatch(new DeleteReadingList(readingList));
  }

  addBooksToReadingList(i: number, title: string) {
    const booksToAdd: Book[] = this.selectedBooks.value;

    const readingList = new ReadingList(
      title,
      booksToAdd
    )

    this.store.dispatch(new UpdateReadingList({
      readingList,
      index: i
    }));

    this.addReadingListForm.reset();
    this.selectedBooks.reset();
  }

  addReadingList() {
    const booksInReadingList: Book[] = [];

    this.store.dispatch(new AddReadingList(new ReadingList(
      this.addReadingListForm.value.title,
      booksInReadingList
    )))

    this.addReadingListForm.reset();
  }
}
