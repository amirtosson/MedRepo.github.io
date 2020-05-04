import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedrepoTextBoxComponent } from './medrepo-text-box.component';

describe('MedrepoTextBoxComponent', () => {
  let component: MedrepoTextBoxComponent;
  let fixture: ComponentFixture<MedrepoTextBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedrepoTextBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedrepoTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
