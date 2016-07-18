import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ai-star',
  templateUrl: 'src/app/templates/star/star.component.html',
  styleUrls: ['src/app/stylesheets/star.component.css']
})

export class StarComponent implements OnChanges{
  @Input() rating: number;
  starWidth: number;
  // 范型参数
  @Output() ratingClicked: EventEmitter<string> =  new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }
}