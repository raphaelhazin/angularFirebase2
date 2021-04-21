import { Component, OnInit } from '@angular/core';
import {Firebase} from './firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  ngOnInit(): void {
    let db = new Firebase();
    db.conectar();
    db.salvar();
    db.consultar();
  }

  title = 'estudarFirebase';
}
