import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from './resume/data-service/resume-data.service';
import { IResumeData } from './resume/data-service/resume-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rData: IResumeData;
  errorMessage: string;
  title: string;
  name: string;

  constructor(private resumeDataService: ResumeDataService) {}

  ngOnInit(): void {
    this.resumeDataService.getResumeData().subscribe(
      data => {
        this.rData = data;
        this.name = this.rData.firstName + ' ' + this.rData.lastName;
        this.title = this.rData.title;
      },
      error => (this.errorMessage = <any>error)
    );
  }
}
