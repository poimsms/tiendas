import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopRoutingModule } from './desktop-rounting.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
      HomeComponent
  ],
  imports: [
    CommonModule,
    AngularSvgIconModule,
    HttpClientModule,
    DesktopRoutingModule
  ]
})
export class DesktopModule { }
