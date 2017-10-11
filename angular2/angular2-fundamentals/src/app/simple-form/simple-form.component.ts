import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <p>
      <input #myInput type="text" [(ngModel)]="message"/>
      <button (click)="update.emit({text: message})">Click for update</button>
    </p>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  @Input() message;
  @Output() update = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}


