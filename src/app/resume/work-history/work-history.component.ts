import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IResumeDataJob } from '../resume-data-job';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['../resume.history.scss']
})
export class WorkHistoryComponent implements OnInit {
  @Input() jobs: Array<IResumeDataJob>;
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() {}

  ngOnInit() {}
}
