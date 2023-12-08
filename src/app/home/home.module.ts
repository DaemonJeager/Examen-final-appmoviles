import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ApiService } from '../api/api.service';
import { HttpClientModule } from '@angular/common/http';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [HomePage],
  providers: [ApiService]
})
export class HomePageModule {}
