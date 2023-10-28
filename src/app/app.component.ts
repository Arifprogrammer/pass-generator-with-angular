import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  letter = false;
  number = false;
  character = false;
  password = '';

  getIength(event: Event) {
    const value = parseInt((event.target as HTMLInputElement).value);
    if (!isNaN(value)) this.length = value;
  }

  getPreference(event: Event) {
    const element = event.target as HTMLInputElement;
    const name = element.name;
    if (name === 'letter') this.letter = !this.letter;
    else if (name === 'number') this.number = !this.number;
    else if (name === 'character') this.character = !this.character;
  }

  submit(event: Event) {
    event.preventDefault();
    this.password = '';
    let passgenerator = '';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const characters = '!@#$%^&*()_-+=<>?';
    if (this.letter) passgenerator += letters;
    if (this.number) passgenerator += numbers;
    if (this.character) passgenerator += characters;
    if (passgenerator) {
      for (let i = 0; i < this.length; i++) {
        const random_number = Math.floor(Math.random() * passgenerator.length);
        this.password += passgenerator[random_number];
      }
    }
  }
}
