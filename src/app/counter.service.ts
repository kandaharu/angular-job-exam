import { Injectable } from '@angular/core';
import { ResultService } from './result.service';

@Injectable()
export class CounterService {
  from: number;
  to: number;
  current: number;

  constructor() {
    this.from = 0;
    this.to = 100;
  }

  next(): void {
    if ((this.current === null) || (this.current === undefined)) {
      this.current = this.from;
    } else if (this.current < this.to) {
      this.current += 1;
    } else {
      // do nothing
    }
  }

  reset(): void {
    this.current = null;
  }

  fizzbuzz(): String {
    if (this.current >= this.to) { return 'end'; }

    let result = '';
    if (this.current % 3 === 0) { result = 'fizz'; }
    if (this.current % 5 === 0) { result = `${result}buzz`; }
    if (result.length === 0)    { result = this.current.toString(); }
    return result;
  }
}
