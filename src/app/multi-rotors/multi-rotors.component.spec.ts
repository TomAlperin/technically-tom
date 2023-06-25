import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRotorsComponent } from './multi-rotors.component';

describe('MultiRotorsComponent', () => {
  let component: MultiRotorsComponent;
  let fixture: ComponentFixture<MultiRotorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiRotorsComponent]
    });
    fixture = TestBed.createComponent(MultiRotorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
