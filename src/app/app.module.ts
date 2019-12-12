import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { InformationComponent } from './pages/information/information.component';
import { ListComprasComponent, StatusPipe } from './pages/listcompras/listcompras.component';
import { CadastrocomprasComponent } from './pages/cadastrocompras/cadastrocompras.component';
import { CadastrorevendedorComponent } from './pages/cadastrorevendedor/cadastrorevendedor.component';
import { CashbackpageComponent } from './pages/cashbackpage/cashbackpage.component';
import { ReactiveFormsModule, AbstractFormGroupDirective } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';

//export const options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ListComprasComponent,
    HomeComponent,
    InformationComponent,
    ListComprasComponent,
    CadastrocomprasComponent,
    CadastrorevendedorComponent,
    CashbackpageComponent,
    StatusPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [AbstractFormGroupDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
