import {TypeModel} from "./type.model";

export class StrategyModel {
  constructor(public type: TypeModel, public seeks: Array<string>, public fears: Array<string>, public strengths:Array<string>) {
  }
}
