import {Component, Input} from '@angular/core';
import {ResultAggregateModel} from "../model/result-aggregate.model";
import {StrategyModel} from "../model/strategy.model";
import {TypeModel} from "../model/type.model";

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent {
  @Input() resultAggregate!: ResultAggregateModel
  @Input() strategies!: Array<StrategyModel>

  getStrategyByType(type: TypeModel) {
    for (const strategy of this.strategies) {
      if (strategy.type === type) {
        return strategy;
      }
    }

    throw Error('Strategy is missing');
  }

}
