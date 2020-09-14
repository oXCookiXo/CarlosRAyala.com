import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { FormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { importType } from '@angular/compiler/src/output/output_ast';
import {MatButtonModule} from '@angular/material/button'



@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    FormsModule,
    PdfViewerModule,
    MatButtonModule
  ]
})
export class ResumeModule { }
