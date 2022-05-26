import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePartnersComponent } from './active-partners.component';

describe('ActivePartnersComponent', () => {
  let component: ActivePartnersComponent;
  let fixture: ComponentFixture<ActivePartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivePartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivePartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
