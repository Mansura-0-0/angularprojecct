import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumeList } from './perfume-list';

describe('PerfumeList', () => {
  let component: PerfumeList;
  let fixture: ComponentFixture<PerfumeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfumeList],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfumeList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
