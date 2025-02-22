import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Apu300component } from './APU-300.component';
describe('Apu300component', () => {
    let component: Apu300component;
    let fixture: ComponentFixture<Apu300component>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Apu300component]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Apu300component);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
