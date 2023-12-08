import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardianGuard } from './Guard/guardian.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[GuardianGuard]
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'teacherprofile',
    loadChildren: () => import('./teacherprofile/teacherprofile.module').then( m => m.TeacherprofilePageModule)
  },
  {
    path: 'sesionalumno',
    loadChildren: () => import('./sesionalumno/sesionalumno.module').then( m => m.SesionalumnoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
