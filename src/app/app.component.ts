import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentItem = "card";
  items = ['item', 'item', 'item', 'item'];
  cards = ['card', 'card', 'card', 'card'];
  
  addItem($event: any) {
    if($event === '') {
      alert('please write something')
      return
    }
    if (this.items.length <= 9) {
      this.items.push($event);
    }
    if (this.items.length === 10) {
      alert('You are not able to add new cards your limit reached');
    }
  }

  addWithButton(card: any) {
    if (this.cards.length <= 9) {
      this.cards.push(card);
    }
    if (this.cards.length === 10) {
      alert('You are not able to add new cards your limit reached');
    }
  }

  deleteItem() {
    if (this.items.length !== 0) {
      this.items.pop()
    } else {
      alert("There is not item for delete")
    }
  }

  deleteCard() {
    if (this.cards.length !== 0) {
      this.cards.pop()
    } else {
      alert("There isn\'t card for delete")
    }
  }
}
