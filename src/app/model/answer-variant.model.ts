import {TypeModel} from "./type.model";

export class AnswerVariantModel {
  constructor(
    public answerText: string,
    public typeMost: TypeModel,
    public typeLeast: TypeModel,
  ) {
  }
}
