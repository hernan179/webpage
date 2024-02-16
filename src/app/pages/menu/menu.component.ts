import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone:true,
  imports: [
    MatGridListModule,
    MatCardModule,
    MatListModule
  ]

})
export class MenuComponent implements OnInit {
  offer!: String;

  ngOnInit(): void {
    this.offer = "Lucimar Cimoncelos, Brodgeport CT - 06610, desingyfinished@gmail.com";
    }
}
