import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageBrokerService {

  constructor() { }
  getFromDirectorSendToDeveloper=new Subject<string>();
  getFromDeveloperSendToDirector=new Subject<string>();

  obsGetFromDirectorSendToDeveloper$=this.getFromDirectorSendToDeveloper.asObservable();
  obsGetFromDeveloperSendToDirector$=this.getFromDeveloperSendToDirector.asObservable();

  SendMessageToDeveloperFromDirector(message:string){
    this.getFromDirectorSendToDeveloper.next(message);
  }

  SendMessageToDirectorFromDeveloper(message:string){
    this.getFromDeveloperSendToDirector.next(message);
  }

}
