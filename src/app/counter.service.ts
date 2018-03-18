import { Injectable } from '@angular/core';
import { Counter } from './counter';
import { ResultService } from './result.service';

@Injectable()
export class CounterService {

  constructor(private resultService: ResultService) { }

  initialize(): Counter {
    return new Counter(0, 100);
  }

  next(): void {
  }
}
