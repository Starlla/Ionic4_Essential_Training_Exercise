import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityVideoPage } from './activity-video.page';

describe('ActivityVideoPage', () => {
  let component: ActivityVideoPage;
  let fixture: ComponentFixture<ActivityVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityVideoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
