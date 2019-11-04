import { Component } from '@angular/core';
import {Activity} from '../types';
import {Observable} from 'rxjs';
import {ActivityService} from '../activity.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  activityList: Observable<Activity[]>;

  constructor(activityService: ActivityService) {
    setTimeout(() => {
      this.activityList = activityService.getActivities();
        }, 3000 )
    console.log(this.activityList);
  }
}

