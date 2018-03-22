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

  describe ('#next', () => {
    let prev: number;

    describe ('execute the method once', () => {
      beforeEach(() => { service.next(); });
      it ('current should set 0', () => {
        expect(service.current).toBe(0);
      });
    });

    describe ('execute the method several times', () => {
      beforeEach(() => {
        for (let i = 0; i < 3; i++) { service.next(); }
        prev = service.current;
        service.next();
      });
      it ('current should set +1 value', () => {
        expect(service.current).toBe(prev + 1);
      });
    });

    describe ('execute the method over "to" value times', () => {
      beforeEach(() => {
        service.current = service.to;
        prev = service.current;
        service.next();
      });
      it ('current should set "to" value', () => {
        expect(service.current).toBe(prev);
      });
    });
  });

  describe ('#reset', () => {
    beforeEach(() => {
      service.next();
    });

    it('current shouod set "nil"', () => {
      service.reset();
      expect(service.current).toBeNull();
    });
  });
});
