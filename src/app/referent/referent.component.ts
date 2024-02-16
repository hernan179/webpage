import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';



@Component({
  selector: 'app-referent',
  templateUrl: './referent.component.html',
  styleUrls: ['./referent.component.css'],
  standalone:true,
  imports: [
 MatCardModule, MatGridListModule,MatListModule
  ]
})
export class ReferentComponent {

}
