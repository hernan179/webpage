import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  standalone: true,
  imports:[
    MatExpansionModule,MatCardModule,MatGridListModule,MatListModule
  ]
})
export class ClientsComponent {
   panelOpenState = false;
}
