import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit ,OnChanges{

  constructor() { }
  stars:any[]=[];
@Input() ratingNumber:number=0;

@Output() ratingClicked:EventEmitter<any>=new EventEmitter();
@Output() ratingChange:EventEmitter<any>=new EventEmitter();
ngOnInit() {
  }

ngOnChanges(){
   this.stars=[];
  for(var i=0;i<5;i++)
  this.stars.push(i);

  this.currentHover=this.ratingNumber;
}

currentHover=0;
rate(star){
  this.ratingClicked.emit({star:(star+1),msg:"this is star of "+star})
}
setHover(star){
  this.currentHover=star;
}
inputKeyUp($event){
  this.ratingChange.emit(this.ratingNumber);
}
}
