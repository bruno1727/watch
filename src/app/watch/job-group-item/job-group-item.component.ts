import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Job } from '../models/job.model';
import { ClockComponent } from '../clock/clock.component';

@Component({
  selector: 'app-job-group-item',
  templateUrl: './job-group-item.component.html',
  styleUrls: ['./job-group-item.component.scss']
})
export class JobGroupItemComponent implements OnInit {

  @Input() job: Job;

  @ViewChild('clock', {static: false}) clock: ClockComponent;

  constructor() { }

  ngOnInit() {
  }

}
