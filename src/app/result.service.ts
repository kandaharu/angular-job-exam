import { Injectable } from '@angular/core';

@Injectable()
export class ResultService {
  result: String = '';

  constructor() {
    this.initialize();
  }

  initialize(): void {
    this.result = 'start';
  }

  set(message: String): void {
    this.result = message;
  }
}
