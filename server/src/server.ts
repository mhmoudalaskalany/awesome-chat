import express from "express";
import { Server } from "socket.io";
import http from "http";
import dotenv from 'dotenv';
import { Message } from './model/message.model';

dotenv.config();

export class ChatServer {
    public static readonly PORT: number = 8080;
    private app: express.Application = express();
    private server = http.createServer(this.app);
    private io = new Server(this.server , {
        cors: {
            origin: "http://localhost:4200",
            methods: ["GET", "POST"]
          }
    });

    constructor() {

        this.listen();
    }



    private listen(): void {
        this.server.listen(ChatServer.PORT, () => {
            console.log('Running server on port %s', ChatServer.PORT);
        });

        this.io.on('connect', (socket: any) => {
            console.log('Connected client on port %s.', ChatServer.PORT);
            socket.on('message', (m: Message) => {
                console.log('[server](message): %s', JSON.stringify(m));
                this.io.emit('message', m);
            });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
            });
        });
    }

    public getApp(): express.Application {
        return this.app;
    }
}