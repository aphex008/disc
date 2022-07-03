import {Component} from '@angular/core';
import {QuestionModel} from "./model/question.model";
import {RepositoryRepository} from "./repository/repository.repository";
import {ResultAggregateModel} from "./model/result-aggregate.model";
import {TypeModel} from "./model/type.model";
import {ResultSegmentModel} from "./model/result-segment.model";
import {StrategyModel} from "./model/strategy.model";

let repositoryRepository = new RepositoryRepository();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'disc';
  questions: Array<QuestionModel> = repositoryRepository.questions;
  types: Array<TypeModel> = repositoryRepository.types;
  resultSegments: Array<ResultSegmentModel> = repositoryRepository.resultSegments;
  resultAggregate: ResultAggregateModel = new ResultAggregateModel(this.types, this.resultSegments);
  strategies: Array<StrategyModel> = repositoryRepository.strategies;

  onAnswered() {
    this.resultAggregate.reset();
    for (const question of this.questions) {
      for(const answer of question.getAnswers()) {
        this.resultAggregate.add(answer);
      }
    }
  }
}
