import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  // encapsuation: ViewEncapsulation.None,//this will disable css encapsulation 
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() element: {type: string, name: string, content: string};//curly brackets define that this is a JS object, this is a TS syntax

  constructor() { }

  ngOnInit() {

  }

}
