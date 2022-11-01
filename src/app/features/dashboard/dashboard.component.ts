import { Component } from '@angular/core';
import { BookService } from '../../core/books.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  authors;

  constructor(private bookService: BookService) {
    this.authors = this.bookService.groupBooksBySameAuthor();
  }
}
