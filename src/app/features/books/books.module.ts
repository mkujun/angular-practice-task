import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BooksComponent } from "../books/books.component";
import { BooksRoutingModule } from "./books-routing.module";
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    BooksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BooksRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule
  ]
})
export class BooksModule { }
