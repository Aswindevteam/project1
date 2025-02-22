import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chs200xzebeComponent } from './CH-S200-XZ-EB-E.component';
describe('Chs200xzebeComponent', () => {
    let component: Chs200xzebeComponent;
    let fixture: ComponentFixture<Chs200xzebeComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Chs200xzebeComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Chs200xzebeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
