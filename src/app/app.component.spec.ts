import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FizzbuzzComponent } from './fizzbuzz/fizzbuzz.component';
import { ResultComponent } from './result/result.component';
import { ResultService } from './result.service';
import { CounterService } from './counter.service';

describe ('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        AppComponent,
        FizzbuzzComponent,
        ResultComponent
      ],
      providers: [
        { provide: ResultService, useClass: ResultService },
        { provide: CounterService, useClass: CounterService },
      ]
    }).compileComponents();
  }));
  it ('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it (`should have as title 'FizzBuzz Generator'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('FizzBuzz Generator');
  }));

  it ('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('FizzBuzz Generator');
  }));
});
