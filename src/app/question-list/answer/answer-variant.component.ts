import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AnswerVariantModel} from "../../model/answer-variant.model";
import {QuestionModel} from "../../model/question.model";
import {TypeModel} from "../../model/type.model";
import {AnswerModel} from "../../model/answer.model";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: '[answer-variant]',
  templateUrl: './answer-variant.component.html',
  styleUrls: ['./answer-variant.component.scss']
})
export class AnswerVariantComponent {
  @Input() answerVariant!: AnswerVariantModel;
  @Input() question!: QuestionModel;
  @Output() answered = new EventEmitter<AnswerVariantComponent>();
  inputMost = false;
  inputLeast = false;

  onAnswerMost(typeMost: TypeModel, $event: MatCheckboxChange) {
    let answer = null;
    if ($event.checked) {
      answer = new AnswerModel(typeMost, true);
    }
    this.question.answerMost = answer;
    this.unsetLeast();
    this.answered.emit(this);
  }

  onAnswerLeast(typeLeast: TypeModel, $event: MatCheckboxChange) {
    let answer = null;
    if ($event.checked) {
      answer = new AnswerModel(typeLeast, false);
    }
    this.question.answerLeast = answer;
    this.unsetMost();
    this.answered.emit(this);
  }

  unsetMost() {
    this.inputMost = false;
  }

  unsetLeast() {
    this.inputLeast = false;
  }
}
