import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSetupComponent } from './service-setup.component';

describe('ServiceSetupComponent', () => {
  let component: ServiceSetupComponent;
  let fixture: ComponentFixture<ServiceSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
