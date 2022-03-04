import { DynamicComponent } from './dynamic/dynamic.component';
import { FormComponent } from './form/form.component';
import { RelexComponent } from './relex/relex.component';
import { FuelComponent } from './fuel/fuel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'fuel', component: FuelComponent},
  {path: 'relex', component: RelexComponent},
  {path: 'form', component: FormComponent},
  {path: 'dynamic', component: DynamicComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
