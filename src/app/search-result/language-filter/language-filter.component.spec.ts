import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageFilterComponent } from './language-filter.component';

describe('LanguageFilterComponent', () => {
  let component: LanguageFilterComponent;
  let fixture: ComponentFixture<LanguageFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
