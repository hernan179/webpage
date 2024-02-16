import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { ReferentComponent } from './referent/referent.component';
import { ContractComponent } from './contract/contract.component';



const routes: Routes = [
  { path: 'home',component: MenuComponent},
  {path: 'clients', component: ClientsComponent },
  {path: 'contract', component: ContractComponent },
  {path: 'experience', component: ExperienceComponent },
  {path: 'referent', component: ReferentComponent },
  {path: 'contact', component: ContactComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'webpage/**', component: MenuComponent},
  {path: '**', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
