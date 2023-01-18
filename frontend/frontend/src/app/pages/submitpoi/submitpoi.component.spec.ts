import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitpoiComponent } from './submitpoi.component';

describe('SubmitpoiComponent', () => {
  let component: SubmitpoiComponent;
  let fixture: ComponentFixture<SubmitpoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitpoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitpoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
