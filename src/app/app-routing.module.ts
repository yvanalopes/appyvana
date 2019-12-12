import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InformationComponent } from './pages/information/information.component';
import { ListComprasComponent } from './pages/listcompras/listcompras.component';
import { CadastrorevendedorComponent } from './pages/cadastrorevendedor/cadastrorevendedor.component';
import { CadastrocomprasComponent } from './pages/cadastrocompras/cadastrocompras.component';
import { CashbackpageComponent } from './pages/cashbackpage/cashbackpage.component';
import { AuthGuard } from '../app/guards/auth.guard';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'information', component: InformationComponent },
  { path: 'listcompras' , component: ListComprasComponent, canActivate: [AuthGuard]},
  { path: 'cadastrorevendedor', component: CadastrorevendedorComponent, canActivate: [AuthGuard]},
  { path: 'cadastrocompras', component: CadastrocomprasComponent, canActivate: [AuthGuard]},
  { path: 'cashback', component: CashbackpageComponent, canActivate: [AuthGuard]},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
