import { NgModule } from '@angular/core';

import {  RouterModule, Routes } from "@angular/router";
import {HomeComponent  } from "../visus/home/home.component";
import { LoginComponent} from "../visus/login/login.component";

const routes: Routes = [
  {path : "", component: HomeComponent},
  {path :"login", component:LoginComponent}
  
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot (routes)],
  exports: [RouterModule]
    
  
})
export class AppRoutingModule { }
