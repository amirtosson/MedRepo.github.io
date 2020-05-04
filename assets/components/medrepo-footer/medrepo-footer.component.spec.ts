import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedrepoFooterComponent } from './medrepo-footer.component';

describe('MedrepoFooterComponent', () => {
  let component: MedrepoFooterComponent;
  let fixture: ComponentFixture<MedrepoFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedrepoFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedrepoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
