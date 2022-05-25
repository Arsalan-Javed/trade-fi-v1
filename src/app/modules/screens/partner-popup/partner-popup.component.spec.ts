import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerPopupComponent } from './partner-popup.component';

describe('PartnerPopupComponent', () => {
  let component: PartnerPopupComponent;
  let fixture: ComponentFixture<PartnerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
