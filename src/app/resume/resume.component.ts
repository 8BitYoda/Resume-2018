import { Component, Input } from '@angular/core';
import { IResumeData } from './data-service/resume-data';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  @Input() rData: IResumeData;
}
