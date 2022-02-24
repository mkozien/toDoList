import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ShopComponent } from './shop/shop.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path: '', redirectTo: '/main-page', pathMatch: 'full'},
  {path: 'main-page', component: MainPageComponent},
  {path: 'tasks-list', component: TasksComponent},
  {path: 'shopping-list', component: ShopComponent},
  {path: 'books-list', component: BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
