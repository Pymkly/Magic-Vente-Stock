import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdayComponent } from './productday.component';

describe('ProductdayComponent', () => {
  let component: ProductdayComponent;
  let fixture: ComponentFixture<ProductdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductdayComponent]
    });
    fixture = TestBed.createComponent(ProductdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
