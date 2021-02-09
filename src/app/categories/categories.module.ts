import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';

import { CategoriesPage } from './categories.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


const categoriesRoutes: Routes = [
  {
    path: '',
    component: CategoriesPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(categoriesRoutes),
    ComponentsModule,
    Ng2SearchPipeModule
  ],
  declarations: [ CategoriesPage ]
})
export class CategoriesPageModule {}
