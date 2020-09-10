import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit ,OnChanges{

  constructor() { }
  stars:any[]=[];
 @Input() ratingNumber:number=5;
 @Output() ratingClicked:EventEmitter<any>=new EventEmitter();
ngOnInit() {
  }
ngOnChanges(){
  for(var i=0;i<this.ratingNumber;i++)
  this.stars.push(i);
}

rate(star){
  this.ratingClicked.emit({star:star+1,msg:"this is star of "+star})
}
}
