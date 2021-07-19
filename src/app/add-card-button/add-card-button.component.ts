import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-card-button',
  templateUrl: './add-card-button.component.html',
  styleUrls: ['../app.component.scss']
})
export class AddCardButtonComponent implements OnInit {

  @Input('card') card = '';
  @Output('addCard') outputEvent2 = new EventEmitter<string>();

  addToItem() {
    this.outputEvent2.emit(this.card)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
