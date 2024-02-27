import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HomePageComponent } from './features/home/home-page/home-page.component';

describe('PagePublicComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
