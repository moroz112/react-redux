import { Component } from '@angular/core';
import {MailService} from "./mail.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  onUpdate(id, text) {
    console.log('text', text);
    this.mail.update(id, text)
  }
  constructor (private mail: MailService) {

  }
}
