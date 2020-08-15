import { Component, OnInit } from '@angular/core';
import { Job } from '../models/job.model';

@Component({
  selector: 'app-job-group',
  templateUrl: './job-group.component.html',
  styleUrls: ['./job-group.component.scss']
})
export class JobGroupComponent implements OnInit {

  jobs: Job[];
  description: string;

  constructor() {
    this.jobs = [];
  }

  ngOnInit() {
  }

  addJob(){
    this.jobs.push({
      Description: this.description,
      Time: {
        milliseconds: 0
      }
    });
  }

  getTotalTime(){
   let sum = 0;
   this.jobs.forEach(j => sum += j.Time.milliseconds);
   return sum;
  }
}
