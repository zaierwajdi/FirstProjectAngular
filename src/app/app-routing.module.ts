import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layout/container/dashboard/dashboard.component';
import { DetailComponent } from './layout/container/detail/detail.component';
import { AjoutComponent } from './layout/container/ajout/ajout.component';
import { ContactComponent } from './layout/container/contact/contact.component';
import { PocComponent } from './layout/container/poc/poc.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path:'', component: LayoutComponent,children:[
    {path:'', component: DashboardComponent},
    {path:'detail/:id', component: DetailComponent},
    {path:'ajout', component: AjoutComponent},
    {path:'contact', component: ContactComponent},
    {path:'poc', component: PocComponent},
  ]},
  {path:'inscription', component: InscriptionComponent},

  {path:'**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
