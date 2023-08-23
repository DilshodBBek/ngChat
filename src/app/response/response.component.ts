import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent {
  responseText!:string
  historyComingMessages:string[]=[];

  @Input() comingText!:string
  @Output() OnResponseReply=new EventEmitter<string>();
  EventInvokeMethod(event:Event){
    this.OnResponseReply.emit(this.responseText);
  }
}
