import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCooltipsComponent } from './ng-cooltips.component';

describe('NgCooltipsComponent', () => {
  let component: NgCooltipsComponent;
  let fixture: ComponentFixture<NgCooltipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCooltipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCooltipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
