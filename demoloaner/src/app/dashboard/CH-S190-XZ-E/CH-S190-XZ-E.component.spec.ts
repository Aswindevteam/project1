import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Chs190xzecomponent } from './CH-S190-XZ-E.component';
describe('Chs190xzecomponent', () => {
    let component: Chs190xzecomponent;
    let fixture: ComponentFixture<Chs190xzecomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Chs190xzecomponent ]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Chs190xzecomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
