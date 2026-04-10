import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPerfume } from './add-perfume';

describe('AddPerfume', () => {
  let component: AddPerfume;
  let fixture: ComponentFixture<AddPerfume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPerfume],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPerfume);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
