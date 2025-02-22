import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Transducercomponent } from './TRANSDUCER.component';
describe('Transducercomponentt', () => {
    let component: Transducercomponent;
    let fixture: ComponentFixture<Transducercomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Transducercomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Transducercomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
