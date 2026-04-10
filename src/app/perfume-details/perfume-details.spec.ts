import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumeDetails } from './perfume-details';

describe('PerfumeDetails', () => {
  let component: PerfumeDetails;
  let fixture: ComponentFixture<PerfumeDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfumeDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfumeDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
