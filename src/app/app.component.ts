import { Component } from '@angular/core';

import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FireChat';
  constructor(public cs: ChatService) {}
}
