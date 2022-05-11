import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserProjectsComponent } from './inser-projects.component';

describe('InserProjectsComponent', () => {
  let component: InserProjectsComponent;
  let fixture: ComponentFixture<InserProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InserProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
