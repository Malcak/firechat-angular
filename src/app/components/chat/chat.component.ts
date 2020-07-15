import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [],
})
export class ChatComponent implements OnInit {
  mensaje = '';
  elemento: any;

  constructor(public cs: ChatService) {
    this.cs.cargarMensajes().subscribe(() => {
      setTimeout(() => {
        this.elemento.scrollTop = this.elemento.scrollHeight;
      }, 20);
    });
  }

  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviar_mensaje() {
    if (this.mensaje.length === 0) {
      return;
    }
    this.cs
      .agregarMensaje(this.mensaje)
      .then(() => {
        console.log(`mensaje enviado`);
      })
      .catch((err) => {
        console.error(`Error al enviar: `, err);
      });
    this.mensaje = '';
  }
}
