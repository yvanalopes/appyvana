import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('login')) {
      this.usuarioService.isLogado =true;
    }
  }

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['/']);
  }
}
