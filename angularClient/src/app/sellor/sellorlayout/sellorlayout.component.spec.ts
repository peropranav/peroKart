import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellorlayoutComponent } from './sellorlayout.component';

describe('SellorlayoutComponent', () => {
  let component: SellorlayoutComponent;
  let fixture: ComponentFixture<SellorlayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellorlayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellorlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
