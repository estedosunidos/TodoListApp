import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
    path:'TodoList',
    loadChildren: ()=> import('../app/TodoApp/TodoList.module').then(m=>m.TodoListModule)
 },
 {
   path: '',
   redirectTo: '/TodoList',
   pathMatch: 'full'
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
