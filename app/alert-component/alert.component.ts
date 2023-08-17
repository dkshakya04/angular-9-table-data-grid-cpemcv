import {Component,  Output, EventEmitter} from '@angular/core';
@Component({
selector: 'alert-data',
templateUrl: './alert.component.html',
 styleUrls: ['./alert.component.css'],
})

export class AlertComponent {
  
    @Output() confirmation = new EventEmitter();
  hidden = true;
  //confirmation = false;
  show() {
    this.hidden = false;
  }
  
  hide() {
    this.hidden = true;
  }
  confirm(){
  this.confirmation.emit(true);
  }
}