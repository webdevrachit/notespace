import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { NotesDetailsComponent } from './pages/notes-details/notes-details.component';

const routes: Routes = [
  { path: '', component: NotesComponent},
    {path: ':id', component: NotesDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
