import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent }   from './sign-up/sign-up.component';
import { FightsListComponent } from './fights-list/fights-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full' },
  {path:'user', component:UserProfileComponent},
  {path:'sign', component:SignUpComponent},
  {path:'fights', component:FightsListComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
