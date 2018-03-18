import { Injectable } from '@angular/core';
import { Counter } from './counter';

@Injectable()
export class CounterService {

  constructor() { }

  getFrom(): Counter {
    return new Counter(0);
  }

  getTo(): Counter {
    return new Counter(100);
  }
}
