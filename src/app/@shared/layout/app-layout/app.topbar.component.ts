import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import * as $ from 'jquery';
@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    constructor(public app: AppComponent) { }
    onToggle(event:Event) {
   
        $('#sidebar').toggleClass('active');
        $('#sidebarCollapse').toggleClass('active');
    }
}
