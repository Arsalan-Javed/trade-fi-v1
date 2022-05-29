import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductServiceTabsComponent } from './product-service-tabs.component';

describe('ProductServiceTabsComponent', () => {
  let component: ProductServiceTabsComponent;
  let fixture: ComponentFixture<ProductServiceTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductServiceTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductServiceTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
