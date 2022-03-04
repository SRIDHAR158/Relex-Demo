import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelexComponent } from './relex.component';

describe('RelexComponent', () => {
  let component: RelexComponent;
  let fixture: ComponentFixture<RelexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
