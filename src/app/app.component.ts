import { BooleanInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   implements OnInit{
  title = 'webpage';
opened: BooleanInput;
owner!: String;

ngOnInit(): void {
this.owner = "Builder Decorate";
  }
}
