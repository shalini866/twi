import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrkComponent } from './wrk.component';

describe('WrkComponent', () => {
  let component: WrkComponent;
  let fixture: ComponentFixture<WrkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });
});
