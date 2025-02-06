import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EastPage } from './east.page';

describe('EastPage', () => {
  let component: EastPage;
  let fixture: ComponentFixture<EastPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
