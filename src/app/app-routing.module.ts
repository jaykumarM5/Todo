import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoViewComponent } from './todo/todo-view/todo-view.component';
import { TodoDetailsComponent } from './todo/todo-details/todo-details.component';

const routes: Routes = [
  {path: 'details',component: TodoDetailsComponent},
  {path: 'view',component: TodoViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
