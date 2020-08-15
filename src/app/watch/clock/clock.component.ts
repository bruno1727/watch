import { Component, OnInit, Input } from '@angular/core';
import { Time } from '../models/time.model';
import { Clock } from '../models/clock.model';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  private _historic: number[];

  clock: Clock;
  run: boolean;

  @Input() time: Time;

  constructor() {
    this._historic = [];
    this.clock = new Clock();
  }

  ngOnInit() {
  }

  private _getAmountTime(): number{

    let histTuples = [];
    let histTemp = [].concat(this._historic);

    while(histTemp.length > 0){
      let splice = histTemp.splice(0, 2)
      histTuples.push({
        begin: splice[0],
        end: splice[1]
      });
    }

    let sum = 0;
    for(let i=0; i< histTuples.length; i ++){
      sum+= (histTuples[i].end || new Date().getTime()) - histTuples[i].begin;
    }

    return sum;
  }

  start(){
    console.log('start!');
    this._historic.push(new Date().getTime());
    this.run = true;

    setTimeout(this._refresh.bind(this), 500);
  }

  private _refresh(){

    const milliseconds = this._getAmountTime();
    this.time.milliseconds = milliseconds;

    this.clock.update(milliseconds);

    if(this.run)
      setTimeout(this._refresh.bind(this), 500);
  }
  
  pause(){
    console.log('pause!');
    this._historic.push(new Date().getTime());
    this.run = false;
  }

  stop(){

  }

}