import { Component, ElementRef, AfterViewInit, ViewChild, OnInit } from '@angular/core';

import { SocketService } from '../../shared/services/socket .service';
import { loadPlayer, Player } from 'rtsp-relay/browser';

@Component({
  selector: 'rtsp-stream',
  templateUrl: './rtsp-stream.component.html',
  styleUrls: ['./rtsp-stream.component.scss']
})
export class RtspStreamComponent implements AfterViewInit {
  player?: Player;
  @ViewChild('videoPlayer')
  videoPlayer?: ElementRef<HTMLCanvasElement>;
  constructor() { }

  async ngAfterViewInit() {
    // this will wait until the connection is established
    this.player = await loadPlayer({
      url: 'ws://localhost:3000/api/stream/1',
      canvas: this.videoPlayer!.nativeElement,

      // optional
      onDisconnect: () => console.log('Connection lost!'),
    });

    console.log('Connected!', this.player);
  }



}