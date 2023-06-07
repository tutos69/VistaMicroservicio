import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateCursoPage } from './update-curso.page';

describe('UpdateCursoPage', () => {
  let component: UpdateCursoPage;
  let fixture: ComponentFixture<UpdateCursoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateCursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
