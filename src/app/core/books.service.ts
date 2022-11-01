import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Book } from "../features/books/book.model";
import { Observable, tap, groupBy, of, mergeMap, from, toArray, zip } from "rxjs";
import { Store } from "@ngxs/store";

@Injectable()
export class BookService {
  books: Observable<Book[]>;

  constructor(private http: HttpClient, private store: Store) {
    this.books = this.store.select(state => state.book.books);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3001/books')
      .pipe(tap(responseData => {
      console.log("get books res", responseData);
    }))
  }

  // service which returns dictionary like structure: author name and list of works
  // 'author' itself don't exits as model at this stage...
  groupBooksBySameAuthor() {
    const arr: {author: string; books: string[]}[] = [];

    this.books.forEach(b => {
        from(b).pipe(
          groupBy(item => item.author),
          mergeMap(group => zip(of(group.key), group.pipe(toArray())))
      ).subscribe(res => {
        const authorName = res[0];
        const authorBooks: string[] = [];

        res[1].forEach(b => {
          authorBooks.push(b.title)
        })

        arr.push({
          author: authorName,
          books: authorBooks
        })
      })
    })

    return arr;
  }


}
