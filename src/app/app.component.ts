import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data = {
    page_title: 'hello!'
  };

  greeting = 'hello and goodbye';

  helloWorld(){
    alert('Hello!!!');
  }

  onKeyUp(newTitle:string){
    this.data.page_title = newTitle;
  }

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
