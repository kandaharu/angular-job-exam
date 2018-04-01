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
  let fromLabel: HTMLElement;
  let toLabel: HTMLElement;

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
      fromLabel = compiled.querySelector('#fizzbuzz-form__from label');
      toLabel = compiled.querySelector('#fizzbuzz-form__to label');

      fromForm = (compiled.querySelector('#fizzbuzz-form__from__input') as HTMLInputElement);
      toForm = (compiled.querySelector('#fizzbuzz-form__to__input') as HTMLInputElement);
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
});
