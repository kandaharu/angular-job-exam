import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { FizzbuzzComponent } from './fizzbuzz.component';
import { CounterService } from '../counter.service';
import { ResultService } from '../result.service';

describe ('FizzbuzzComponent', () => {
  let component: FizzbuzzComponent;
  let fixture: ComponentFixture<FizzbuzzComponent>;
  let compiled: HTMLElement;
  let counterService: CounterService;

  let fromForm: HTMLInputElement;
  let toForm: HTMLInputElement;
  let fromLabel: HTMLLabelElement;
  let toLabel: HTMLLabelElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ FizzbuzzComponent ],
      providers: [
        { provide: CounterService, useClass: CounterService },
        { provide: ResultService, useClass: ResultService },
      ]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(FizzbuzzComponent);
      component = fixture.componentInstance;
      counterService = TestBed.get(CounterService);
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
    });
  }));

  describe ('when initialize', () => {
    beforeEach(() => {
      fromLabel = compiled.querySelector('#fizzbuzz-form__from label') as HTMLLabelElement;
      toLabel = compiled.querySelector('#fizzbuzz-form__to label') as HTMLLabelElement;

      fromForm = compiled.querySelector('#fizzbuzz-form__from__input') as HTMLInputElement;
      toForm = compiled.querySelector('#fizzbuzz-form__to__input') as HTMLInputElement;
    });
    it ('should create', () => {
      expect(component).toBeTruthy();
    });

    it ('should render "start" label', () => {
      expect(fromLabel.textContent).toContain('start');
    });

    it ('should render "end" label', () => {
      expect(toLabel.textContent).toContain('end');
    });

    it ('should render "from" input tag with default value', () => {
      expect(fromForm.value).toContain(counterService.from.toString());
    });

    it ('should render "to" input tag with default value', () => {
      expect(toForm.value).toContain(counterService.to.toString());
    });
  });

  describe('#next', () => {
    describe('when next is clicked once', () => {
      beforeEach(() => { component.next(); });
      it('current counter should render "from" value', () => {
        expect(counterService.current).toEqual(counterService.from);
      });
    });

    describe('when next is clicked twice', () => {
      beforeEach(() => {
        component.next();
        component.next();
      });
      it('current counter should render "from" + 1 value', () => {
        expect(counterService.current).toEqual(counterService.from + 1);
      });
    });

    describe('when next is clicked over "to" value', () => {
      beforeEach(() => {
        counterService.to = 1;
        component.next();
        component.next();
        component.next();
      });
      it('current counter should render "to" value', () => {
        expect(counterService.current).toEqual(counterService.to);
      });
    });

    describe('#reset', () => {
      beforeEach(() => {
        component.next();
        component.reset();
      });
      it('current counter should set default value', () => {
        expect(counterService.current).toEqual(undefined);
      });
    });
  });
});
