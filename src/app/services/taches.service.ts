import { Injectable } from '@angular/core';
import { Tache } from '../models/tache.models';

@Injectable({
  providedIn: 'root'
})
export class TachesService {
  taches: Tache[] = [
    {
      id: 1,
      titre: "Ma tâche à faire n°1",
      resume: "Lorem ipsum",
      contenu: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In sapiente consequatur asperiores repudiandae, facere, laudantium quis dolores perspiciatis eveniet fuga assumenda minima alias? Odit corrupti deleniti nostrum sed tempora fuga! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur enim sit aliquam cupiditate aut nobis optio soluta natus nesciunt? Mollitia eaque impedit officiis dolore quos numquam, magni odit rem dolorum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat magnam quibusdam obcaecati deleniti nulla porro dignissimos. Nobis, deleniti possimus voluptatibus, quaerat, veniam error dolorem placeat assumenda nemo natus officiis aperiam.",
      done: false,
    },
    {
      id: 2,
      titre: "Ma tâche à faire n°2",
      resume: "Lorem ipsum",
      contenu: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In sapiente consequatur asperiores repudiandae, facere, laudantium quis dolores perspiciatis eveniet fuga assumenda minima alias? Odit corrupti deleniti nostrum sed tempora fuga! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur enim sit aliquam cupiditate aut nobis optio soluta natus nesciunt? Mollitia eaque impedit officiis dolore quos numquam, magni odit rem dolorum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat magnam quibusdam obcaecati deleniti nulla porro dignissimos. Nobis, deleniti possimus voluptatibus, quaerat, veniam error dolorem placeat assumenda nemo natus officiis aperiam.",
      done: false,
    },
    {
      id: 3,
      titre: "Ma tâche à faire n°3",
      resume: "Lorem ipsum",
      contenu: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In sapiente consequatur asperiores repudiandae, facere, laudantium quis dolores perspiciatis eveniet fuga assumenda minima alias? Odit corrupti deleniti nostrum sed tempora fuga! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur enim sit aliquam cupiditate aut nobis optio soluta natus nesciunt? Mollitia eaque impedit officiis dolore quos numquam, magni odit rem dolorum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat magnam quibusdam obcaecati deleniti nulla porro dignissimos. Nobis, deleniti possimus voluptatibus, quaerat, veniam error dolorem placeat assumenda nemo natus officiis aperiam.",
      done: false,
    },
    {
      id: 4,
      titre: "Ma tâche à faire n°4",
      resume: "Lorem ipsum",
      contenu: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In sapiente consequatur asperiores repudiandae, facere, laudantium quis dolores perspiciatis eveniet fuga assumenda minima alias? Odit corrupti deleniti nostrum sed tempora fuga! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur enim sit aliquam cupiditate aut nobis optio soluta natus nesciunt? Mollitia eaque impedit officiis dolore quos numquam, magni odit rem dolorum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat magnam quibusdam obcaecati deleniti nulla porro dignissimos. Nobis, deleniti possimus voluptatibus, quaerat, veniam error dolorem placeat assumenda nemo natus officiis aperiam.",
      done: false,
    },
    {
      id: 5,
      titre: "Ma tâche à faire n°5",
      resume: "Lorem ipsum",
      contenu: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In sapiente consequatur asperiores repudiandae, facere, laudantium quis dolores perspiciatis eveniet fuga assumenda minima alias? Odit corrupti deleniti nostrum sed tempora fuga! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur enim sit aliquam cupiditate aut nobis optio soluta natus nesciunt? Mollitia eaque impedit officiis dolore quos numquam, magni odit rem dolorum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat magnam quibusdam obcaecati deleniti nulla porro dignissimos. Nobis, deleniti possimus voluptatibus, quaerat, veniam error dolorem placeat assumenda nemo natus officiis aperiam.",
      done: false,
    },
  ]

  constructor() { }

  public getTaches(): Tache[] {
    return this.taches;
  }

  public ajouterTache(tache: Tache): void {
    this.taches.push(tache);
  }
}
