import { Component } from '@angular/core';
import { MessageBrokerService } from '../message-broker.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent {

  constructor(private brokerService: MessageBrokerService) {
    brokerService.obsGetFromDeveloperSendToDirector$.subscribe(message => {
      this.GetFromDeveloperMessages.push(message);
    })
  }
  GetFromDeveloperMessage!: string;
  GetFromDeveloperMessages: string[]=[];

  SendToDeveloperMessage!: string;
  SendToDeveloperMessages: string[]=[];

  SendMessageToDeveleoper()
  {
    this.brokerService.SendMessageToDeveloperFromDirector(this.SendToDeveloperMessage);
    this.SendToDeveloperMessages.push(this.SendToDeveloperMessage);
  }
}
