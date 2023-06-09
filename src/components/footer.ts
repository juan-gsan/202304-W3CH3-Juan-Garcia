import { Component } from './component';
import './footer.css';

export class Footer extends Component {
  // Alt brand: string
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <footer>
      <address>ISDI-Coders</address>
    </footer>
    `;
  }
}
