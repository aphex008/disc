import {Component, Input} from '@angular/core';
import {ResultAggregateModel} from "../model/result-aggregate.model";
import {TypeModel} from "../model/type.model";
import {QuestionModel} from "../model/question.model";
import {ResultSegmentModel} from "../model/result-segment.model";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() public resultAggregate!: ResultAggregateModel;
  @Input() types!: Array<TypeModel>;
  @Input() questions!: Array<QuestionModel>;
  @Input() resultSegments!: Array<ResultSegmentModel>;
  mediumIndex = 4;
  segmentNumbers = [7,6,5,4,3,2,1];

  getSegment(type: TypeModel, index: number) {
    return this.resultSegments.filter(segment => segment.type === type && segment.sortOrder === index)[0];
  }
}
