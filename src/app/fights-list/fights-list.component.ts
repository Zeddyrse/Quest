import { Component, OnInit, Input, TemplateRef, ViewContainerRef } from '@angular/core';



@Component({
  selector: 'app-fights-list',
  templateUrl: './fights-list.component.html',
  styleUrls: ['./fights-list.component.css']
})
export class FightsListComponent implements OnInit {

  public showMovies:boolean = true;

  
   constructor() { }

  ngOnInit() {
  }

}
