import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { Index5Component } from './index5/index5.component';

@NgModule({
  declarations: [Index5Component],
  imports: [
    CommonModule, ScrollToModule.forRoot(), PagesRoutingModule, SharedModule, NgbModalModule
  ]
})
export class PagesModule { }
