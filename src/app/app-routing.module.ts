import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarNotasComponent } from './cargar-notas/cargar-notas.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { VerNotasComponent } from './ver-notas/ver-notas.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
    {path:'',redirectTo:'/welcome',pathMatch:'full'},
    {path:'welcome',component:WelcomeComponent},
    {path:'cargar-notas',component:CargarNotasComponent},
    {path:'ver-notas',component:VerNotasComponent},
    {path:'app-contacto',component:ContactoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }