import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateChatComponent } from './chat/components/private-chat/private-chat.component';
import { RtspStreamComponent } from './chat/components/rtsp-stream/rtsp-stream.component';
const routes: Routes = [
  {
    path: '', component: RtspStreamComponent
  },
  {
    path: 'chat', component: PrivateChatComponent
  },
  {
    path: 'rtsp', component: RtspStreamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
