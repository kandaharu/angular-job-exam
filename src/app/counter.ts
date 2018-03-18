export class Counter {
  from: number;
  to: number;
  current: number;

  constructor(from: number, to: number) {
    this.from = from;
    this.to = to;
  }

  next(): void {
    if (this.current === null || this.current === undefined) {
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
}
