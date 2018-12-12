import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IResumeDataEdu } from '../resume-data-edu';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'app-education-history',
  templateUrl: './education-history.component.html',
  styleUrls: ['../resume.history.scss']
})
export class EducationHistoryComponent implements OnInit {
  @Input() schools: Array<IResumeDataEdu>;
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() {}

  ngOnInit() {}
}
