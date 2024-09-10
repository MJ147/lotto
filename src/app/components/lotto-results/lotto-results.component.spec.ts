import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoResultsComponent } from './lotto-results.component';

describe('LottoResultsComponent', () => {
  let component: LottoResultsComponent;
  let fixture: ComponentFixture<LottoResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LottoResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LottoResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
