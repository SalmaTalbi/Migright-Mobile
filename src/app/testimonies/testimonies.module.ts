import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';

import { TestimoniesPage } from './testimonies.page';

const testimoniesRoutes: Routes = [
  {
    path: '',
    component: TestimoniesPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(testimoniesRoutes),
    ComponentsModule
  ],
  declarations: [ TestimoniesPage ]
})
export class TestimoniesPageModule {}
