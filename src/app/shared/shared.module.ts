import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "../header/header.component";
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteAlertComponent } from './delete-alert/delete-alert.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialog } from "./delete-alert/delete-alert.component";

@NgModule({
  declarations: [
    HeaderComponent,
    DeleteAlertComponent,
    DeleteDialog
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    HeaderComponent,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    ReactiveFormsModule,
    MatDialogModule,
    DeleteAlertComponent,
    DeleteDialog
  ]
})
export class SharedModule {}
