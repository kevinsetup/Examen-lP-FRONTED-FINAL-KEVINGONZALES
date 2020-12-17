import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LventasComponent } from './lventas.component';

describe('LventasComponent', () => {
  let component: LventasComponent;
  let fixture: ComponentFixture<LventasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LventasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
