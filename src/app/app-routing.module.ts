import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeModule } from './about-me/about-me.module';
import { ProfessionalExperienceModule } from './professional-experience/professional-experience.module'
import { importType } from '@angular/compiler/src/output/output_ast';
import { NotFoundComponent } from './not-found/not-found.component'
import { from } from 'rxjs';
import { ResumeModule } from './resume/resume.module';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component : HomeComponent },
  {
    path: 'about-me',
    loadChildren: () => import('./about-me/about-me.module').then(mod => mod.AboutMeModule)
  },
  {
    path: 'experience',
    loadChildren: () => import('./professional-experience/professional-experience.module').then(mod => mod.ProfessionalExperienceModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('./resume/resume.module').then(mod => mod.ResumeModule)
  },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
