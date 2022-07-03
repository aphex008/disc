import {Component, EventEmitter, Input, Output, QueryList, ViewChildren} from '@angular/core';
import {QuestionModel} from "../../model/question.model";
import {AnswerVariantComponent} from "../answer/answer-variant.component";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question!: QuestionModel;
  @ViewChildren(AnswerVariantComponent) answerVariantComponents!: QueryList<AnswerVariantComponent>
  @Output() answered = new EventEmitter<void>();

  onAnswered($event: AnswerVariantComponent) {
    this.unsetSiblingAnswerVariants($event);
    this.answered.emit();
  }

  private unsetSiblingAnswerVariants($event: AnswerVariantComponent) {
    for (const answerVariant of this.answerVariantComponents) {
      if ($event === answerVariant) continue;
      if ($event.inputMost) answerVariant.unsetMost();
      if ($event.inputLeast) answerVariant.unsetLeast();
    }
  }
}
