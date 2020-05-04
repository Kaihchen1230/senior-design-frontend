import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformFilterComponent } from './platform-filter.component';

describe('PlatformFilterComponent', () => {
  let component: PlatformFilterComponent;
  let fixture: ComponentFixture<PlatformFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
