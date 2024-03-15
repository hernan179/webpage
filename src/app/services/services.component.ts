import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';


import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  details: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Painter', details: ' Painter is a professional who helps prepare surfaces, mix paints for different needs, and apply them with brushes or rollers to fill in cracks or apply color on walls and other objects around a home, such as furniture pieces or doors.'},
  {position: 2, name: 'Cement',  details: 'The proportion that is usually used is: for every part of cement, 0.5 parts of water, 2 parts of sand and 4 parts of gravel. The proportions influence the strength, durability and workability of the mixture'},
  {position: 3, name: 'Roofer',  details: 'Roofers install shingles, asphalt, metal, or other materials to make the roof weatherproof. Roofers replace, repair, and install the roofs of buildings, using a variety of materials, including shingles, bitumen, and metal.'},
  {position: 4, name: 'Constructor',  details: 'A constructor is a special initialization function that is automatically called whenever a class is declared. The constructor always has the same name as the class name, and no data types are defined for the argument list or the return type. Normally a constructor is used to initialize a class.'}
];


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  standalone: true,
  imports:[
    MatExpansionModule,MatCardModule,MatGridListModule,MatTableModule
  ]
})
export class ServicesComponent  {

  displayedColumns: string[] = ['position', 'name',  'details'];
  dataSource = ELEMENT_DATA;
}
