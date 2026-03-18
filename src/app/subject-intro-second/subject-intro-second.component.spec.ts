import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectIntroSecondComponent } from './subject-intro-second.component';

describe('SubjectIntroSecondComponent', () => {
  let component: SubjectIntroSecondComponent;
  let fixture: ComponentFixture<SubjectIntroSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubjectIntroSecondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubjectIntroSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
