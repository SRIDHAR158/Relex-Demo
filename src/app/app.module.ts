import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { FuelComponent } from './fuel/fuel.component';
import { NewfuelComponent } from './newfuel/newfuel.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RelexComponent } from './relex/relex.component';
import { FormComponent } from './form/form.component';
import { DynamicComponent } from './dynamic/dynamic.component';


@NgModule({
  declarations: [
    AppComponent,
    FuelComponent,
    NewfuelComponent,
    RelexComponent,
    FormComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatSlideToggleModule,
    HttpClientModule,
    NgxDatatableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
