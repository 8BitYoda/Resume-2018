import { Component, OnInit, Input } from '@angular/core';
import { IResumeDataEdu } from '../resume-data-edu';

@Component({
  selector: 'app-education-history',
  templateUrl: './education-history.component.html',
  styleUrls: ['../resume.history.scss']
})
export class EducationHistoryComponent implements OnInit {
  @Input() schools: Array<IResumeDataEdu>;

  constructor() { }

  ngOnInit() {
  }

}
