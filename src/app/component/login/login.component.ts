import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean;
  usuario: Usuario;

  constructor(private formBuilder: FormBuilder, private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    if(this.f.usuario.value == "yvanadlopes@gmail.com" && this.f.senha.value == "123") {
      this.usuario = this.f.usuario.value;
      this.usuario = this.f.senha.value;
      this.usuarioService.login(this.usuario);
      this.router.navigate(['listcompras']);
    }
  }
}
