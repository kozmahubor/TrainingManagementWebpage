import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedRegisterFormComponent } from './shared-register-form.component';

describe('SharedRegisterFormComponent', () => {
  let component: SharedRegisterFormComponent;
  let fixture: ComponentFixture<SharedRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedRegisterFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
