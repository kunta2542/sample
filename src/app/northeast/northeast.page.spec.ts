import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NortheastPage } from './northeast.page';

describe('NortheastPage', () => {
  let component: NortheastPage;
  let fixture: ComponentFixture<NortheastPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NortheastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
