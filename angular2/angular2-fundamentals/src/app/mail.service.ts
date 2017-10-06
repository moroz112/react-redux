import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  messages = [
    `some message 1`, `some message 2`, `some message 3`
  ];
  constructor() { }

}
