import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterFormComponent,
    MessageFormComponent
  ],
  exports: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
