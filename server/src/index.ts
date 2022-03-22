import { ChatServer } from './servers/chat-server'
console.log('Hello To Chat Server');

let app = new ChatServer().getApp();

console.log('connected');
