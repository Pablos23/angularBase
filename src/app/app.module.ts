import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './@shared/layout/layout.component';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './@shared/layout/auth-layout/auth-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';
import { AppMenuComponent, AppSubMenuComponent } from './@shared/layout/app-layout/app.menu.component';
import { AppTopBarComponent } from './@shared/layout/app-layout/app.topbar.component';
import { AppFooterComponent } from './@shared/layout/app-layout/app.footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AuthLayoutComponent,    
    AppMenuComponent,
    AppSubMenuComponent,
    AppTopBarComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,    
    ScrollPanelModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
