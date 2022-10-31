import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-neweducacion',
  templateUrl: './neweducacion.component.html',
  styleUrls: ['./neweducacion.component.css']
})
export class NeweducacionComponent implements OnInit {
  nombreEdu: string;
  descripcionEdu: string;

  constructor(
    private educacionS: EducacionService,
     private router: Router,
     private toastr: ToastrService
     ) { }


  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreEdu, this.descripcionEdu);
    this.educacionS.save(educacion).subscribe(
      data =>{
         this.toastr.success('Educación Creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['']);
      }, err =>{
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center'
        });
        this.router.navigate(['']);
      }
    )
  }
}
