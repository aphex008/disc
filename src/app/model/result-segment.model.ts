import {TypeModel} from "./type.model";

export class ResultSegmentModel {
  constructor(public type: TypeModel, public sortOrder: number, public scores: Array<number>, public medium: boolean = false) {
  }
}
