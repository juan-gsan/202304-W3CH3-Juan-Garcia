import { Component } from './component';

export class Header extends Component {
  constructor(selector: string, public title: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <header>
      <h1>Awesome Pets</h1>
    </header>
    `;
  }
}
