import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBodyComponent } from './services-body.component';

describe('ServicesBodyComponent', () => {
  let component: ServicesBodyComponent;
  let fixture: ComponentFixture<ServicesBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
