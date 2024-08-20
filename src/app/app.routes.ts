import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AppointmentComponent } from './appointments/appointments.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'home', component:HomeComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'login', component: LoginComponent},
    { path: 'symptoms', component: SymptomsComponent},
    { path: 'doctors', component:DoctorsComponent},
    {path:'appointments',component:AppointmentComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }