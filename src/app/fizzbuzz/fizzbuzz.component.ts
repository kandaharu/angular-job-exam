import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.css']
})
export class FizzbuzzComponent implements OnInit {
  from: Counter;
  to: Counter;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.from = this.counterService.getFrom();
    this.to = this.counterService.getTo();
  }
}
