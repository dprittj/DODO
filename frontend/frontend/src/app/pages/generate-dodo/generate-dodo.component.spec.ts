import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateDodoComponent } from './generate-dodo.component';

describe('GenerateDodoComponent', () => {
  let component: GenerateDodoComponent;
  let fixture: ComponentFixture<GenerateDodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateDodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateDodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
