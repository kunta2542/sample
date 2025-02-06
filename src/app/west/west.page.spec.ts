import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WestPage } from './west.page';

describe('WestPage', () => {
  let component: WestPage;
  let fixture: ComponentFixture<WestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
