import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { ToolbarComponent } from '../layout/toolbar/toolbar.component';

const MATERIAL_MODULE = [

  ReactiveFormsModule, // https://angular.io/guide/reactive-form
  
  MatSidenavModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MATERIAL_MODULE, HeaderComponent, ToolbarComponent, FooterComponent, 
  ],
  exports: [CommonModule, MATERIAL_MODULE, HeaderComponent,ToolbarComponent, FooterComponent, ]
})
export class SharedModule { }
