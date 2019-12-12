import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from '../models/usuario.class';

@Injectable({ providedIn: 'root' })
export class UsuarioService {

  public isLogado: boolean;
  constructor(private http: HttpClient) {

  }

  public get IsLogado() {
    return this.isLogado;
  }

  login(usuario: Usuario) {
    //this.http.post<Usuario>("urlApi", cadastroCompras).pipe(map(usuario => {
    //  return usuario
    //}));
    this.isLogado = true;
    localStorage.setItem("login", usuario.usuario);
  }

  public get usuarioLogado() {
    if (localStorage.getItem('login')) {
      return true;
    } else {
      return null;
    }
  }

  logout() {
    // remove user from local storage to log user out
    this.isLogado = false;
    localStorage.removeItem('login');
  }
}