import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message); // push() adds a message to the end of the array
  }

  clear() {
    this.messages = []; // empties the array
  }
}
