import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IResumeData } from './data-service/resume-data';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnChanges {
  @Input() rData: IResumeData;
  skillList: Set<string> = new Set();

  ngOnChanges(changes: SimpleChanges): void {
    if (this.rData) {
      const _jobs = this.rData.jobs;

      if (_jobs) {
        for (const i in _jobs) {
          if (_jobs[i].skills) {
            for (const skill of _jobs[i].skills) {
              this.skillList.add(skill.name);
            }
          }
        }
      }
    }
  }
}
