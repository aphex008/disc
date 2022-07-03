import {AnswerVariantModel} from "./answer-variant.model";
import {AnswerModel} from "./answer.model";

export class QuestionModel {
  public answerMost: AnswerModel | null = null;
  public answerLeast: AnswerModel | null = null;

  constructor(
    public question: string,
    public answerVariants: Array<AnswerVariantModel>,
    public sortOrder: number
  ) {
  }

  getAnswers(): Array<AnswerModel | null> {
    return [this.answerMost, this.answerLeast];
  }
}
