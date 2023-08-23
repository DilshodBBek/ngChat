import { Component } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent {
sendtext!:string
historyComingMessages:string[]=[];
ResponseComponentText!:string
getRespose(responseText:string){
  this.ResponseComponentText=responseText
}
}
