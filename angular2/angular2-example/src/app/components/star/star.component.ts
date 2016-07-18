import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'ai-star',
  templateUrl: 'src/app/templates/star/star.component.html',
  styleUrls: ['src/app/stylesheets/star.component.css']
})

export class StarComponent implements OnChanges{
  @Input() rating: number;
  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }
}