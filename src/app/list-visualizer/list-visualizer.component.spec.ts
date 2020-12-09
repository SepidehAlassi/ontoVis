import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVisualizerComponent } from './list-visualizer.component';

describe('ListVisualizerComponent', () => {
  let component: ListVisualizerComponent;
  let fixture: ComponentFixture<ListVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
