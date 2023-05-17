import { Component } from './component';
import { Pet } from '../models/pet';
import { getPets } from '../data/get-pets';
import './pets.list.css';

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
      <p>Id: ${pet.id}</p>
      <p>Name: ${pet.name}</p>
      <p>Breed: ${pet.breed}</p>
      <p>Adopted: <input type="checkbox" ${pet.isAdopted ? 'checked' : ''}><p>
      <p>Owner: ${pet.owner}</p>
      <p class="button" role="button">X</p>
    </li>`
      )
      .join('');

    return `<ul>${list}</ul>`;
  }
}
