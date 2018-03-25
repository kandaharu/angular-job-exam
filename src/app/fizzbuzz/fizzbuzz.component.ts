import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css']
})
export class FizzbuzzComponent implements OnInit {
  constructor(public counterService: CounterService, private resultService: ResultService) { }

  ngOnInit() {}

  next() {
    this.counterService.next();
    this.resultService.set(this.counterService.fizzbuzz());
  }

  reset() {
    this.counterService.reset();
    this.resultService.initialize();
  }
}
