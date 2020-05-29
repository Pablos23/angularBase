import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Banrural-console';
  sidebarActive: boolean =true;

    onMenuButtonClick(event: Event) {
        this.sidebarActive = !this.sidebarActive;

        event.preventDefault();
    }
}
