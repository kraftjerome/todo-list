import { Component, Input, OnInit } from '@angular/core';
import { Tache } from '../models/tache.models';
import { TachesService } from '../services/taches.service';
// import { TachesListeComponent } from '../taches-liste/taches-liste.component';

@Component({
  selector: 'app-nouvelle-tache',
  templateUrl: './nouvelle-tache.component.html',
  styleUrls: ['./nouvelle-tache.component.scss']
})
export class NouvelleTacheComponent implements OnInit {
  public nouvelleTache: Tache = {
    id: 0,
    titre: "",
    resume: "",
    contenu: "",
    done: false,
  };

  constructor(private _tachesService: TachesService,
              /*private _tachesListe: TachesListeComponent*/ ) { }

  ngOnInit(): void {
    // this.nouvelleTache.id = this._tachesListe.obtenirLongueurListe();  => à modifier
    this.nouvelleTache.id = (this._tachesService.getTaches().length + 1);
    console.log("this.nouvelleTache.id : ", this.nouvelleTache.id);
  }

  public ajouterNouvelleTache() {
    this._tachesService.ajouterTache( {...this.nouvelleTache} );
  }

}
