import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocollenComponent } from './protocollen.component';

describe('ProtocollenComponent', () => {
  let component: ProtocollenComponent;
  let fixture: ComponentFixture<ProtocollenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtocollenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProtocollenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
