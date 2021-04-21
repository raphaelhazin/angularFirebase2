import { Component, OnInit } from '@angular/core';
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB-EObrp2hmcnMCiPBzn3uUxnr69XAK_-0",
  authDomain: "angularspike-672db.firebaseapp.com",
  databaseURL: "https://angularspike-672db-default-rtdb.firebaseio.com",
  projectId: "angularspike-672db",
  storageBucket: "angularspike-672db.appspot.com",
  messagingSenderId: "229448386006",
  appId: "1:229448386006:web:3e54a76042a06077f81077",
  measurementId: "G-2762CJWVVJ"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ngOnInit(): void {
    var dbRealTime = firebase.initializeApp(firebaseConfig); 
    const db = dbRealTime.database().ref('chave/' + 1000);
    db.set({
      nome:"rafa",
      idade:10
    });

  }

  title = 'estudarFirebase';
}
