import { NgModule } from '@angular/core';
import { MatButtonModule} from "@angular/material/button";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



const MaterialComponents = [
  MatButtonModule,
  MatGridListModule,
  MatExpansionModule,
  MatTableModule,
  MatIconModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule
]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule {

}
