import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFormArrayComponent } from './child-form-array.component';

describe('ChildFormArrayComponent', () => {
  let component: ChildFormArrayComponent;
  let fixture: ComponentFixture<ChildFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildFormArrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
