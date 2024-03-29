import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UpdateClientePage } from './update-cliente.page';
import { IonicModule } from '@ionic/angular';

describe('UpdateClientePage', () => {
  let component: UpdateClientePage;
  let fixture: ComponentFixture<UpdateClientePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
    fixture = TestBed.createComponent(UpdateClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
