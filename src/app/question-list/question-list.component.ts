import {Component, EventEmitter, Input, Output} from '@angular/core';
import {QuestionModel} from "../model/question.model";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent {
  @Input() questions!: Array<QuestionModel>;
  @Output() answered = new EventEmitter<void>();

  onAnswered() {
    this.answered.emit();
  }
}
