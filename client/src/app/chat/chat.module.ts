import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateChatComponent } from './components/private-chat/private-chat.component';
import { RtspStreamComponent } from './components/rtsp-stream/rtsp-stream.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [
    PrivateChatComponent,
    RtspStreamComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ChatModule { }
