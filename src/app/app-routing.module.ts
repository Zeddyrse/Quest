import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent }   from './sign-up/sign-up.component';

const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full' },
  {path:'user', component:UserProfileComponent},
  {path:'sign', component:SignUpComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
