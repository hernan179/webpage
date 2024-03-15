import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { MaterialsComponent } from './materials/materials.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContractComponent } from './contract/contract.component';



const routes: Routes = [
  { path: 'home',component: MenuComponent},
  {path: 'services', component: ServicesComponent },
  {path: 'contract', component: ContractComponent },
  {path: 'materials', component: MaterialsComponent },
  {path: 'experience', component: ExperienceComponent },
  {path: 'contact', component: ContactComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
