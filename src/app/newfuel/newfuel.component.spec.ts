import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfuelComponent } from './newfuel.component';

describe('NewfuelComponent', () => {
  let component: NewfuelComponent;
  let fixture: ComponentFixture<NewfuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewfuelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
