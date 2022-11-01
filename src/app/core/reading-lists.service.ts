import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ReadingList } from "../features/reading-lists/reading-list.model";

@Injectable()
export class ReadingListsService {
  constructor(private http: HttpClient) {}

  getReadingList(): Observable<ReadingList[]> {
      return this.http.get<ReadingList[]>('http://localhost:3001/readingLists')
  }
}
