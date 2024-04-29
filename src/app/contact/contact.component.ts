import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list'
import {MatIconModule} from '@angular/material/icon'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone:true,
  imports: [
 MatCardModule, MatGridListModule,MatListModule,MatIconModule
  ]
})
export class ContactComponent {

}
