import { Component, OnInit, Input } from '@angular/core';
import { ITechnologyDetail } from '../../data-service/technology-detail';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  @Input() techData: Array<ITechnologyDetail>;

  constructor() { }

  ngOnInit() {
  }

}
