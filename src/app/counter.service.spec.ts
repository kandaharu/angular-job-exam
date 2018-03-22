import { TestBed, inject } from '@angular/core/testing';
import { CounterService } from './counter.service';

describe ('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CounterService] });
    service = new CounterService();
  });

  it ('should be created', inject([CounterService], () => {
    expect(service).toBeTruthy();
  }));

  describe ('#constructor()', () => {
    it ('this.from should be 0', () => {
      expect(service.from).toBe(0);
    });
    it ('this.to should be 100', () => {
      expect(service.to).toBe(100);
    });
    it ('this.current should be undefined', () => {
      expect(service.current).toBeUndefined();
    });
  });

  describe ('#next()', () => {
    let prev: number;

    describe ('when execute the method once', () => {
      beforeEach(() => { service.next(); });
      it ('this.current should be 0', () => {
        expect(service.current).toBe(0);
      });
    });

    describe ('when execute the method several times', () => {
      beforeEach(() => {
        for (let i = 0; i < 3; i++) { service.next(); }
        prev = service.current;
        service.next();
      });
      it ('this.current should be +1 value', () => {
        expect(service.current).toBe(prev + 1);
      });
    });

    describe ('when execute the method over this.to value times', () => {
      beforeEach(() => {
        service.current = service.to;
        prev = service.current;
        service.next();
      });
      it ('this.current should be this.to value', () => {
        expect(service.current).toBe(prev);
      });
    });
  });

  describe ('#reset()', () => {
    beforeEach(() => { service.next(); });
    it('this.current shouod be undefined', () => {
      service.reset();
      expect(service.current).toBeUndefined();
    });
  });

  describe ('#fizzbuzz()', () => {
    describe ('when this.current value is over this.to value', () => {
      beforeEach(() => { service.current = service.to; });
      it ('should return "end"', () => {
        expect(service.fizzbuzz()).toBe('end');
      });
    });

    describe ('when this.current value is divided by 3', () => {
      beforeEach(() => { service.current = 6; });
      it ('should return "fizz"', () => {
        expect(service.fizzbuzz()).toBe('fizz');
      });
    });

    describe ('when this.current value is divided by 5', () => {
      beforeEach(() => { service.current = 20; });
      it ('should return "buzz"', () => {
        expect(service.fizzbuzz()).toBe('buzz');
      });
    });

    describe ('when this.current value is divided by 3 and 5', () => {
      beforeEach(() => { service.current = 60; });
      it ('should return "fizzbuzz"', () => {
        expect(service.fizzbuzz()).toBe('fizzbuzz');
      });
    });
  });
});
