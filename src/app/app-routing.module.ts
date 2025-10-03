import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { PostlistComponent } from './components/postlist/postlist.component';

const routes: Routes = [
  { path: '',  component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'userlist', component: UserlistComponent},
  { path: 'todolist', component: TodolistComponent},
  { path: 'postlist', component: PostlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
