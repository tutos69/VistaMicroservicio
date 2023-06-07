import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateInscripcionPage } from './update-inscripcion.page';

describe('UpdateInscripcionPage', () => {
  let component: UpdateInscripcionPage;
  let fixture: ComponentFixture<UpdateInscripcionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateInscripcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
