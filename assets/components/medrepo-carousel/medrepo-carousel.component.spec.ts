import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedrepoCarouselComponent } from './medrepo-carousel.component';

describe('MedrepoCarouselComponent', () => {
  let component: MedrepoCarouselComponent;
  let fixture: ComponentFixture<MedrepoCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedrepoCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedrepoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
