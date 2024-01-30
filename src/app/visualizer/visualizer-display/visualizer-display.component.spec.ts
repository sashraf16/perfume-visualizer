import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizerDisplayComponent } from './visualizer-display.component';

describe('VisualizerDisplayComponent', () => {
  let component: VisualizerDisplayComponent;
  let fixture: ComponentFixture<VisualizerDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizerDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
