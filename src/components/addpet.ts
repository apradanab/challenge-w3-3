import { Component } from './component';
import { petList } from './petlist';

export class Pet extends Component {
  name: string;
  species: string;
  constructor(selector: string) {
    super(selector);
    this.name = '';
    this.species = '';
    this.render();
  }

  render(): void {
    this.name = '';
    this.species = '';
    this.template = this.createTemplate();
    super.render();

    const form = this.element.querySelector('#add');
    if (form) {
      form.addEventListener('submit', (event: Event) => {
        event.preventDefault();
        const nameInput = form.querySelector('.userName') as HTMLInputElement;
        const speciesInput = form.querySelector(
          '.userSpecies'
        ) as HTMLInputElement;
        this.name = nameInput.value;
        this.species = speciesInput.value;

        const randomID = Math.floor(Math.random() * 10000);
        const newPet = {
          id: randomID,
          name: this.name,
          species: this.species,
          isAdopted: false,
        };
        petList.push(newPet);
      });
    }
  }

  createTemplate() {
    return `    `;
  }
}
