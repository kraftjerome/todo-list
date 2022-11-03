import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TachesListeComponent } from './taches-liste/taches-liste.component';
import { TacheComponent } from './tache/tache.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { NouvelleTacheComponent } from './nouvelle-tache/nouvelle-tache.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TachesListeComponent,
    TacheComponent,
    PageAccueilComponent,
    NouvelleTacheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   // nécessaire pour les input de formulaire
    ReactiveFormsModule   // nécessaire pour le [(ngModule)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
