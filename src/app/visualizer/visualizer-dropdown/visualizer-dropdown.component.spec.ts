import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizerDropdownComponent } from './visualizer-dropdown.component';

describe('VisualizerDropdownComponent', () => {
  let component: VisualizerDropdownComponent;
  let fixture: ComponentFixture<VisualizerDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizerDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizerDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
