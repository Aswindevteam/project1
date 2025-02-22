import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {
  private sub: any;
  private camElement!: HTMLElement | null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.sub = this.route.url.subscribe(() => {
      const path = this.router.url;
      console.log(path);
      try {
        if (path === '/de_lo/camera') {
          this.camElement = document.getElementById('goCam');
          if (this.camElement) {
            this.renderer.setStyle(this.camElement, 'display', 'none');
          }
        } else {
          if (this.camElement) {
            this.renderer.setStyle(this.camElement, 'display', 'block');
          }
        }
      } catch (e) {
        console.log(e);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  backHome() {
    try {
      this.router.navigate(['/']);
    } catch (e) {
      console.log(e);
    }
  }

  goCam() {
    try {
      this.router.navigate(['/de_lo/camera']);
    } catch (e) {
      console.log(e);
    }
  }
}
