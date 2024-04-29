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
  offerNow!: String;
  offer!: String;

  ngOnInit(): void {
  this.offerNow = "Lou Construction";
  this.offer = " +12035459694";
  }

}
