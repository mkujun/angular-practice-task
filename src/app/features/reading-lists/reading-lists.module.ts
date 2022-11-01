import { NgModule } from "@angular/core";
import { ReadingListsComponent } from "./reading-lists.component";
import { ReadingListRoutingModule } from "./reading-list-routing.module";
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from "../../shared/shared.module";
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    ReadingListsComponent
  ],
  imports: [
    ReadingListRoutingModule,
    MatTableModule,
    MatInputModule,
    SharedModule,
    MatSelectModule
  ]
})
export class ReadingListsModule { }
