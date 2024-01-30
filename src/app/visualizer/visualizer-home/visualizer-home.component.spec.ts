import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizerHomeComponent } from './visualizer-home.component';

describe('VisualizerHomeComponent', () => {
  let component: VisualizerHomeComponent;
  let fixture: ComponentFixture<VisualizerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizerHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
