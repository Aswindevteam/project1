import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chs700xzeaComponent } from './CH-S700-XZ-EA.component';
describe('Chs700xzeaComponent', () => {
    let component: Chs700xzeaComponent;
    let fixture: ComponentFixture<Chs700xzeaComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Chs700xzeaComponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Chs700xzeaComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
