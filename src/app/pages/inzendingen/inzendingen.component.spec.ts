import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InzendingenComponent } from './inzendingen.component';

describe('InzendingenComponent', () => {
  let component: InzendingenComponent;
  let fixture: ComponentFixture<InzendingenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InzendingenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InzendingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
