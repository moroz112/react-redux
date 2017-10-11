import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  messages = [
    {id: 0, text: `some message 1`},
    {id: 1, text: `some message 2`},
    {id: 2, text: `some message 3`}
  ];
  update (id, text) {
    this.messages = this.messages.map(m =>
    m.id === id ? {id, text} : m)
  }
  constructor() { }

}
