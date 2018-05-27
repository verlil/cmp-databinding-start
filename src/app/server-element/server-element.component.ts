import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  // encapsuation: ViewEncapsulation.None,//this will disable css encapsulation
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input() element: {type: string, name: string, content: string};//curly brackets define that this is a JS object, this is a TS syntax
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log('constructor');
   }

  ngOnInit() {
    console.log('ngOnInit "', this.header.nativeElement.textContent, '"');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges, ', changes);
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit "', this.header.nativeElement.textContent, '"');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    console.log(this.header);
  }

}
