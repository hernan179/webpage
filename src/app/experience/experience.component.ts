import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { topcard ,topcards} from '../data/top-cards-data';




@Component({
  selector: 'app-referent',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  standalone:true,
  imports: [
 MatCardModule, MatGridListModule,MatListModule
  ]
})
export class ExperienceComponent {
  topcards:topcard[];
  constructor() {

    this.topcards = topcards;
  }
}
