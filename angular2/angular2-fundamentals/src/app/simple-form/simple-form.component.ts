import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <p>
      Realy work. Great!
      <input #myInput type="text" [(ngModel)]="ololo"/>
      {{ololo}}
      <button (click)="onClick(myInput.value)">Yo</button>
    </p>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  ololo=`asdasd`;
  @Input() message;
  onClick(value: String) {
    console.log(value)
  }
  constructor() { }

  ngOnInit() {
  }

}
