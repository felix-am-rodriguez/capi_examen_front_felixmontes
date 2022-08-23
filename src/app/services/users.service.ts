import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private ClienteHttp: HttpClient)
  {

  }

  public ConsultarUsuarios(): any
  {
    return this.ClienteHttp.get("http://localhost:8000/api/consultar-usuarios");
  }
}
