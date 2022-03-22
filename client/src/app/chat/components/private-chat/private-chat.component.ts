import { Component, OnInit } from '@angular/core';

import { Action } from '../../shared/model/action';
import { Event } from '../../shared/model/event';
import { Message } from '../../shared/model/message';
import { User } from '../../shared/model/user';
import { SocketService } from '../../shared/services/socket .service';


@Component({
  selector: 'private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.scss']
})
export class PrivateChatComponent implements OnInit {
  action = Action;
  user: User = {
    name: 'mahmoud alaskalany'
  };
  message;
  messages: Message[] = [];
  messageContent: string;
  ioConnection: any;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.initIoConnection();
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onMessage()
      .subscribe((message: Message) => {
        console.log(message);
        this.messages.push(message);
      });

    this.socketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });

    this.socketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
  }

  public sendMessage(): void {
    if (!this.message) {
      return;
    }

    this.socketService.send({
      user: this.user,
      content: this.message
    });
    this.messageContent = null;
  }


}