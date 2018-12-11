import { Component, OnInit, Input } from '@angular/core';
import { IResumeDataJob } from '../resume-data-job';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent implements OnInit {
  @Input() jobs: Array<IResumeDataJob>;

  constructor() {}

  ngOnInit() {}
}
