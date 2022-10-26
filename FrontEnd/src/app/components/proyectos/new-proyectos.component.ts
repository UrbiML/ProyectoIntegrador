import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {

  nombre: string = '';
  descripcion: string = '';

  constructor(private sProyecto: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Proyecto(this.nombre, this.descripcion);
    this.sProyecto.save(expe).subscribe(
      data => 
        {alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
