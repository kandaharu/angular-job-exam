import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ResultComponent } from './result.component';
import { ResultService } from '../result.service';

describe ('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ResultComponent ],
      providers: [
        { provide: ResultService, useClass: ResultService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
  });

  describe ('when initialize', () => {
    beforeEach(() => {
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
    });

    it ('should create', () => {
      expect(component).toBeTruthy();
    });

    it ('should render title in a h2 tag', async(() => {
      expect(compiled.querySelector('h2').textContent).toContain('result');
    }));

    it ('should render result', async(() => {
      const resultService = TestBed.get(ResultService);
      expect(compiled.querySelector('#result').textContent).toContain(resultService.result);
    }));
  });

  describe ('when result is changed', () => {
    let resultService: ResultService;
    beforeEach (() => {
      resultService = TestBed.get(ResultService);
      resultService.result = 'XXX';
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
    });

    it ('should render changed result', async(() => {
      expect(compiled.querySelector('#result').textContent).toEqual(resultService.result);
    }));
  });
});
