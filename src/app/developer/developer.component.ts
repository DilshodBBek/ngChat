import { Component } from '@angular/core';
import { MessageBrokerService } from '../message-broker.service';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {
  constructor(private brokerService: MessageBrokerService) {
    brokerService.obsGetFromDirectorSendToDeveloper$.subscribe(message => {
      this.GetFromDirectorMessages.push(message);
    })
  }
  GetFromDirectorMessage!:string
  GetFromDirectorMessages:string[]=[]

  SendToDirectorMessage!:string
  SendToDirectorMessages:string[]=[]

  SendMessageToDirector(){
    this.brokerService.SendMessageToDirectorFromDeveloper(this.SendToDirectorMessage);
    this.SendToDirectorMessages.push(this.SendToDirectorMessage);
  }
}
