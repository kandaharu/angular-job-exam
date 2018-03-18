import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';
import { CounterService } from '../counter.service';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css']
})
export class FizzbuzzComponent implements OnInit {
  counter: Counter;

  constructor(private counterService: CounterService, private resultService: ResultService) { }

  ngOnInit() {
    this.counter = this.counterService.initialize();
  }

  next() {
    this.counter.next();
    this.resultService.setResult();
  }

  reset() {
    this.counter.reset();
  }
}
