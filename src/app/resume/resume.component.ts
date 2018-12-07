import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from './resume-data.service';
import { IResumeData } from './resume-data';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  rData: IResumeData;
  errorMessage: string;

  constructor(private resumeDataService: ResumeDataService) {}

  ngOnInit() {
    this.resumeDataService.getResumeData().subscribe(
      data => {
        this.rData = data;
      },
      error => (this.errorMessage = <any>error)
    );
  }
}
