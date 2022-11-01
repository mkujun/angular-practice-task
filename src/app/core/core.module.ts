import { NgModule } from "@angular/core";
import { BookService } from "./books.service";
import { ReadingListsService } from "./reading-lists.service";

@NgModule({
  providers: [
    BookService,
    ReadingListsService
  ]
})
export class CoreModule {}
