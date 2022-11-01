import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
   path: 'books',
   loadChildren: () => import('./features/books/books.module').then(m => m.BooksModule)
 },
 {
   path: '',
   redirectTo: '',
   pathMatch: 'full'
 },
 {
   path: 'reading-lists',
   loadChildren: () => import('./features/reading-lists/reading-lists.module').then(m => m.ReadingListsModule)
 },
 {
   path: 'dashboard',
   loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
