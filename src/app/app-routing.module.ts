import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeModule } from './about-me/about-me.module';
import { ProfessionalExperienceModule } from './professional-experience/professional-experience.module'
import { ResumeModule} from './resume/resume.module'
import { importType } from '@angular/compiler/src/output/output_ast';
import { NotFoundComponent } from './not-found/not-found.component'
import { from } from 'rxjs';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component : HomeComponent },
  {
    path: 'about-me',
    loadChildren: () => AboutMeModule 
  },
  {
    path: 'experience',
    loadChildren: () => ProfessionalExperienceModule
  },
  {
    path: 'resume',
    loadChildren: () => ResumeModule
  },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
