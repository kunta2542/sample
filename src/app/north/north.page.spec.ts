import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NorthPage } from './north.page';

describe('NorthPage', () => {
  let component: NorthPage;
  let fixture: ComponentFixture<NorthPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
