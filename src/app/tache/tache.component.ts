import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from '../models/tache.models';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {
  public tache!: Tache;

  constructor(private _router: Router) {
    let _navigation = this._router.getCurrentNavigation();
    console.log('_navigation tacheComponent : ', _navigation);
    if(_navigation?.extras?.state) {
      this.tache = _navigation.extras.state['tache'];
      console.log('objet _navigation récupéré : ', this.tache);
    }
  }

  ngOnInit(): void {
  }
}

/** TO DO :
 * - améliorer la fonction de changement de statut (done = true), avec liaison clic-checkbox
 * - améliorer la fonction de récupération de la longueur de liste
 * - fonction de suppression d'une tâche
 * - améliorer le SCSS
*/

