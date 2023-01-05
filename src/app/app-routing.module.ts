import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'


  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path : 'employee',
    loadChildren:() => import('./employee/employee.module').then(m =>m.EmployeeModule )
  },
  {
    path:'patient',
    loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
  },
  {
    path:'rpm',
    loadChildren: () => import('./rpm/rpm.module').then(m =>m.RpmModule)
  },
  {
    path : 'home',
    loadChildren:() => import('./home/home.module').then(m =>m.HomeModule)
  },
  {
    path : 'data',
    loadChildren:() => import('./data/data.module').then(m =>m.DataModule)
  },
  {
    path : 'pipes',
    loadChildren:() => import('./pipes/pipes.module').then(m =>m.PipesModule)
  },
  

];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
