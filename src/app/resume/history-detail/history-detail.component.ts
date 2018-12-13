import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import { IResumeHistory } from '../data-service/resume-history';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit {
  @Input() historyData: Array<IResumeHistory>;
  @Input() sectionType: string;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  sectionTitle: string;

  constructor() {}

  ngOnInit() {
    switch (this.sectionType) {
      case 'edu':
        this.sectionTitle = 'Education';
        break;
      case 'job':
        this.sectionTitle = 'Job History';
        break;
      default:
        break;
    }
  }
}
