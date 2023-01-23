import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
    @Input('title') title!: string;

    @Output() newItemEvent = new EventEmitter<string>();

    foo1: string = 'hello';
    foo2!: string;

    foo2Exists () {
      return this.foo2 != undefined;
    }

    addNewItem(value: string) {
      this.newItemEvent.emit(value);
    }
}
