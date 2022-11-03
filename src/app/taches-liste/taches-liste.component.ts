import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from '../models/tache.models';
import { TachesService } from '../services/taches.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-taches-liste',
  templateUrl: './taches-liste.component.html',
  styleUrls: ['./taches-liste.component.scss']
})
export class TachesListeComponent implements OnInit {
  public listeTaches: Tache[] = [];

  constructor(private _router: Router,
              private _tachesService: TachesService) { }

  ngOnInit(): void {
    this.listeTaches = this._tachesService.getTaches();
    console.log('listeTaches taches-liste.component : ', this.listeTaches);
  }

  /* Récupérer les infos de la tâche depuis la todo list et accéder à la tâche */
  public accederDetailTache(tache: Tache) {
    console.log(`idTache : ${tache.id}`);
    this._router.navigate([`taches/${tache.id}`], {
      state: { tache }
    });
  }

  /* Récupérer la longueur du tableau "listeTaches" pour l'auto-incrémentation de l'ID de la nouvelle tâche */
  public obtenirLongueurListe() {
    return this.listeTaches.length;
  }

  /* Passer le statut "done" d'une tâche de "false" à "true" */
  public marquerTacheFaite(tache: Tache) {            // A retravailler
    if (tache.done === false) {
      tache.done = true;
    } else {
      tache.done = false;
    }
    console.log('tache.done : ', tache.done)
  }
}
