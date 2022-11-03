import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouvelleTacheComponent } from './nouvelle-tache/nouvelle-tache.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { TacheComponent } from './tache/tache.component';
import { TachesListeComponent } from './taches-liste/taches-liste.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: PageAccueilComponent },
  { path: 'taches', component: TachesListeComponent },
  { path: 'taches/:id', component: TacheComponent },
  { path: 'nouvelleTache', component: NouvelleTacheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
