import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentDetailsPageComponent } from './assessment-details-page.component';

describe('AssessmentDetailsPageComponent', () => {
  let component: AssessmentDetailsPageComponent;
  let fixture: ComponentFixture<AssessmentDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
