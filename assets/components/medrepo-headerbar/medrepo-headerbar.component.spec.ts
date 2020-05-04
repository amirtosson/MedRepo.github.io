import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedrepoHeaderbarComponent } from './medrepo-headerbar.component';

describe('MedrepoHeaderbarComponent', () => {
  let component: MedrepoHeaderbarComponent;
  let fixture: ComponentFixture<MedrepoHeaderbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedrepoHeaderbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedrepoHeaderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
