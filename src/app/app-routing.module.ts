import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CompanyComponent } from './components/company/company.component';
import {OfficeComponent} from './components/offices/office.component';
import {ProductsComponent} from './components/products/products.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'office', component: OfficeComponent},
  {path: 'product', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
