import { Component } from './component';
import { Pet } from '../models/pet';
import { getPets } from '../data/get-pets';

export class List extends Component {
  pets: Pet[];
  constructor(selector: string) {
    super(selector);
    this.pets = getPets();
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const list = this.pets
      .map(
        (pet) => `
    <li>
      <span>${pet.id}</span>
      <span>${pet.name}</span>
      <span>${pet.breed}</span>
      <span>${pet.isAdopted}</span>
      <span>${pet.owner}</span>
    </li>`
      )
      .join('');

    return `<ul>${list}</ul>`;
  }
}
