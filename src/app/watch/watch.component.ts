import { Component, OnInit, ViewChild } from '@angular/core';
import { JobGroupComponent } from './job-group/job-group.component';
import { ClockComponent } from './clock/clock.component';
import { Time } from './models/time.model';
import { Clock } from './models/clock.model';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

  @ViewChild('jobGroup', {static: false}) jobGroup: JobGroupComponent;

  constructor() { }

  ngOnInit() {
  }

  getClockLogged(): Clock{
    let clock = new Clock();
    if(this.jobGroup)
      clock.update(this.jobGroup.getTotalTime());
    return clock;
  }

}
