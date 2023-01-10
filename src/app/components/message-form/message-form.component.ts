import { Component, Input } from '@angular/core';
import { Person } from 'src/app/interfaces';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styles: [],
})
export class MessageFormComponent {
  @Input() person!: Person;
}
