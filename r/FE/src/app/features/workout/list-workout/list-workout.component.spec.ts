import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWorkoutComponent } from './list-workout.component';

describe('ListWorkoutComponent', () => {
  let component: ListWorkoutComponent;
  let fixture: ComponentFixture<ListWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListWorkoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
