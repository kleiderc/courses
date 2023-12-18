import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { ToolbarComponent } from '../layout/toolbar/toolbar.component';

import { TranslateModule } from '@ngx-translate/core';

const MATERIAL_MODULE = [

  ReactiveFormsModule, // https://angular.io/guide/reactive-form

  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
]

@NgModule({
  declarations: [],
  imports: [

  ],
  exports: [CommonModule, MATERIAL_MODULE, TranslateModule]
})
export class SharedModule { }
