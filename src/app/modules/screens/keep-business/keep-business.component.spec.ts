import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeepBusinessComponent } from './keep-business.component';

describe('KeepBusinessComponent', () => {
  let component: KeepBusinessComponent;
  let fixture: ComponentFixture<KeepBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeepBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeepBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
