import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterNewsComponent } from './enter-news.component';

describe('EnterNewsComponent', () => {
  let component: EnterNewsComponent;
  let fixture: ComponentFixture<EnterNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
