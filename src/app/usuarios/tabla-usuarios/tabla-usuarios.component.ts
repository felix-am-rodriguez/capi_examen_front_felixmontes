import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  protected ArregloUsuarios: Array<any> = [];

  constructor(private Servicio: UsersService) 
  { 

  }

  ngOnInit(): void {
    this.Servicio.ConsultarUsuarios().subscribe(
      (Respuesta: any) => {
        this.ArregloUsuarios = Respuesta;
        console.log(Respuesta);
      },
      (Error: any) => {
        console.log(Error);
      },
      () => {

      }
    );
  }

}
