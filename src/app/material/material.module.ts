import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule,} from '@angular/material/form-field';
import { 
  MatSelectModule} from '@angular/material/select';
  import {MatDatepickerModule} from '@angular/material/datepicker';


const material = [
  MatListModule,
   MatFormFieldModule,
   MatSelectModule,
  MatButtonModule,
  FormsModule,
  MatDatepickerModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatBadgeModule,
  MatCardModule,
  MatDialogModule,
  MatMenuModule,
  MatTooltipModule,
  

];

@NgModule({

  exports: [material],
  imports: [material],
})
export class MaterialModule { }
