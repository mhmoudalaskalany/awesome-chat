import { User } from "./user.model";

export interface Message {
    content:string;
    user: User;
}

