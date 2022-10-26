import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { LoginComponent } from './components/auth/login.component';
import { RegistroComponent } from './components/auth/registro.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';
import { AdminComponent } from './components/users/admin.component';
import { UserComponent } from './components/users/user.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'registro', component: RegistroComponent },
  {path:'nuevaexp', component: NewExperienciaComponent , canActivate: [guard], data: { expectRol: ['admin']}},
  {path:'editexp/:id', component: EditExperienciaComponent, canActivate: [guard], data: { expectRol: ['admin']}},
  {path:'nuevaedu', component: NeweducacionComponent, canActivate: [guard], data: { expectRol: ['admin']}},
  {path:'editedu/:id', component: EditeducacionComponent, canActivate: [guard], data: { expectRol: ['admin']}},
  {path:'nuevahys', component: NewSkillComponent, canActivate: [guard], data: { expectRol: ['admin']}},
  {path:'edithys/:id', component: EditSkillComponent, canActivate: [guard], data: { expectRol: ['admin']}},
  {path:'editaracercade/:id', component: EditAcercaDeComponent, canActivate: [guard], data: { expectRol: ['admin']}},
  {path:'nuevoproyecto', component: NewProyectosComponent, canActivate: [guard], data: { expectRol: ['admin']}},
  {path:'editeproyecto/:id', component: EditProyectosComponent, canActivate: [guard], data: { expectRol: ['admin']}},

  {path: 'admin', component: AdminComponent, canActivate: [guard], data: {expectedRol: ['admin']}},
  {path: 'user', component: UserComponent, canActivate: [guard], data: {expectedRol: ['user']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
