import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeandCompoComponent } from './pipeand-compo.component';

describe('PipeandCompoComponent', () => {
  let component: PipeandCompoComponent;
  let fixture: ComponentFixture<PipeandCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipeandCompoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeandCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
