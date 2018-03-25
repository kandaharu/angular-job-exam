import { TestBed, inject } from '@angular/core/testing';
import { ResultService } from './result.service';

describe ('ResultService', () => {
  let service: ResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultService]
    });
    service = new ResultService();
  });

  it ('should be created', inject([ResultService], () => {
    expect(service).toBeTruthy();
  }));

  describe ('#constructor()', () => {
    // FIXME this.initialize を呼んでいることといったテストにしたい!!
    it ('this.result should be "start"', () => {
      expect(service.result).toBe('start');
    });
  });

  describe ('#initialize()', () => {
    it ('this.result should be "start"', () => {
      expect(service.result).toBe('start');
    });
  });

  describe ('#set(message: String)', () => {
    describe ('when "AAA" is set in message argument', () => {
      beforeEach(() => { service.set('AAA'); });
      it ('this.result should be "AAA"', () => {
        expect(service.result).toBe('AAA');
      });
    });
  });

});
