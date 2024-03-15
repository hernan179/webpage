import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css'],
  standalone:true,
  imports: [
 MatCardModule, MatGridListModule,MatListModule,MatExpansionModule
  ]
})
export class MaterialsComponent {
  panelOpenState = false;
}


