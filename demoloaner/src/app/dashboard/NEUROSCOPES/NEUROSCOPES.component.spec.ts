import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Neuroscopescomponent } from './NEUROSCOPES.component';
describe('Neuroscopescomponent', () => {
    let component: Neuroscopescomponent;
    let fixture: ComponentFixture<Neuroscopescomponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ Neuroscopescomponent]
      })
      .compileComponents();

      fixture = TestBed.createComponent(Neuroscopescomponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
