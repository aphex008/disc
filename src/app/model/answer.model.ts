import {TypeModel} from "./type.model";

export class AnswerModel {
  constructor(public type: TypeModel | null, public isMost: boolean) {
  }
}
