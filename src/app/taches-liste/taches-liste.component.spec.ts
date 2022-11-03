import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachesListeComponent } from './taches-liste.component';

describe('TachesListeComponent', () => {
  let component: TachesListeComponent;
  let fixture: ComponentFixture<TachesListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TachesListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TachesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
