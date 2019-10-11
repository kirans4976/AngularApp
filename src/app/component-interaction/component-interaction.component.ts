import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  constructor() { }
  @Input() public parentData;
  // another syntax
  // @Input('parentData') public name; 

  /* As we have child componet decorator in parent componet we can easlity transfer the data 
  but we didnt have parent  decorators in child componet for this we have to using events  */

  @Output() public childEvent = new EventEmitter();
  ngOnInit() {
  }
  fireEvent()
  {
    this.childEvent.emit('hey kiran');
  }

}
