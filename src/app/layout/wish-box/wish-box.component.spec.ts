import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishBoxComponent } from './wish-box.component';

describe('WishBoxComponent', () => {
  let component: WishBoxComponent;
  let fixture: ComponentFixture<WishBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishBoxComponent]
    });
    fixture = TestBed.createComponent(WishBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
