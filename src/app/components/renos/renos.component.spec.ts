import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenosComponent } from './renos.component';

describe('RenosComponent', () => {
  let component: RenosComponent;
  let fixture: ComponentFixture<RenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
