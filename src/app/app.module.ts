import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {QuestionListComponent} from './question-list/question-list.component';
import {QuestionComponent} from './question-list/question/question.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {AnswerVariantComponent} from './question-list/answer/answer-variant.component';
import {ResultComponent} from './result/result.component';
import {MatButtonModule} from "@angular/material/button";
import {StrategyComponent} from './strategy/strategy.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionComponent,
    AnswerVariantComponent,
    ResultComponent,
    StrategyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
