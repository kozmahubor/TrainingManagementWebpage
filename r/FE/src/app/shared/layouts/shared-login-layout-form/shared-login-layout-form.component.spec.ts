import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLoginLayoutFormComponent } from './shared-login-layout-form.component';

describe('SharedLoginLayoutFormComponent', () => {
  let component: SharedLoginLayoutFormComponent;
  let fixture: ComponentFixture<SharedLoginLayoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedLoginLayoutFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SharedLoginLayoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
