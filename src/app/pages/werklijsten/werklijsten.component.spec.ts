import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WerklijstenComponent } from './werklijsten.component';

describe('WerklijstenComponent', () => {
  let component: WerklijstenComponent;
  let fixture: ComponentFixture<WerklijstenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WerklijstenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WerklijstenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
