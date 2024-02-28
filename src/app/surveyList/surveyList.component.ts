import {Component, OnInit, Input} from '@angular/core';
import {Survey} from "../../types/Survey";
@Component({
  selector: 'survey-list',
  templateUrl: './surveyList.component.html',
  styleUrls: ['./surveyList.component.scss']
})

export class SurveyList implements OnInit {
  @Input() surveyList: Survey[];
  @Input() statusFilter: string;
  @Input() categoryFilter: string;

  get filteredSurveys() {
    return this.surveyList.filter(survey =>
      (this.statusFilter === 'All' || survey.status === this.statusFilter) &&
      (!this.categoryFilter || survey.category === this.categoryFilter)
    );
  }

  ngOnInit() {}

}
