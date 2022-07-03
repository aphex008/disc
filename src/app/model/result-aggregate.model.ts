import {TypeModel} from "./type.model";
import {AnswerModel} from "./answer.model";
import {ResultSegmentModel} from "./result-segment.model";

export class ResultAggregateModel {
  private answers: Array<AnswerModel> = [];

  constructor(private types: Array<TypeModel>, private resultSegments: Array<ResultSegmentModel>) {
  }

  reset(): void {
    this.answers = [];
  }

  add(answerAnswer: AnswerModel | null): void {
    if (answerAnswer === null) return;
    this.answers.push(answerAnswer);
  }

  count(countType: TypeModel): number {
    let count = 0;
    for (const answer of this.answers) {
      if (answer.type === countType) {
        count++;
      }
    }
    return count;
  }

  getDominant(): Array<TypeModel> {
    const list: Array<{ type: TypeModel, score: number, resultSegment: ResultSegmentModel }> = [];
    for (const type of this.types) {
      const score = this.count(type);
      let resultSegmentModel = this.resultSegments.filter(segment => segment.type === type && segment.scores.indexOf(score) !== -1)[0];
      list.push({type: type, score: score, resultSegment: resultSegmentModel})
    }
    list.sort((b, a) => {
      if (a.resultSegment !== b.resultSegment) {
        return a.resultSegment.sortOrder - b.resultSegment.sortOrder
      }
      return a.score - b.score;
    });

    return list.map(item => item.type);
  }
}
