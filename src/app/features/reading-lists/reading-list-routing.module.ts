import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadingListsComponent } from './reading-lists.component';

const routes: Routes = [
  {
    path: '',
    component: ReadingListsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReadingListRoutingModule { }
