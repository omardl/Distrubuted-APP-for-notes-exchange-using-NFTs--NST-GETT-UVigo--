import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Se añaden los componentes y se declaran sus rutas
import { AddNoteComponent } from './components/add-note/add-note.component';
import { ListNotePreviewsComponent } from './components/list-note-previews/list-note-previews.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-book' },
  { path: 'list-note-previews', component: ListNotePreviewsComponent },
  { path: 'add-note', component: AddNoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
