import { NoteComponent } from './note/note.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'add', component: AddComponent },
  { path: 'note/:id', pathMatch: 'full', component: NoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AddComponent, NoteComponent]