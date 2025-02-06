import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouthPage } from './south.page';

describe('SouthPage', () => {
  let component: SouthPage;
  let fixture: ComponentFixture<SouthPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
