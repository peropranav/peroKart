import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellorDashboardComponent } from './sellor-dashboard.component';

describe('SellorDashboardComponent', () => {
  let component: SellorDashboardComponent;
  let fixture: ComponentFixture<SellorDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
