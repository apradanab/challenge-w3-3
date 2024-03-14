import { Component } from './component';

interface Pet {
  name: string;
  species: string;
  isAdopted: boolean;
  id: number;
}

export class Card extends Component {
  pet: Pet;
  petName: string;
  petSpecies: string;
  petIsAdopted: boolean;
  petId: number;
  constructor(selector: string, pet: Pet) {
    super(selector);
    this.pet = pet;
    this.petName = this.pet.name;
    this.petSpecies = this.pet.species;
    this.petIsAdopted = this.pet.isAdopted;
    this.petId = this.pet.id;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<div class= "card"><ul>
  <li>Nombre: ${this.petName}</li>
  <li>Raza: ${this.petSpecies}</li>
  <li>Adoptado: ${this.petIsAdopted}</li>
  <li>ID: ${this.petId} </li>
</ul></div>`;
  }
}
