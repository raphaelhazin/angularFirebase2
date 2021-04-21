import firebase from "firebase/app";
import "firebase/database";

export class Firebase {

    firebaseConfig;
    instancia;

    constructor() {
        this.firebaseConfig =  {
            apiKey: "AIzaSyB-EObrp2hmcnMCiPBzn3uUxnr69XAK_-0",
            authDomain: "angularspike-672db.firebaseapp.com",
            databaseURL: "https://angularspike-672db-default-rtdb.firebaseio.com",
            projectId: "angularspike-672db",
            storageBucket: "angularspike-672db.appspot.com",
            messagingSenderId: "229448386006",
            appId: "1:229448386006:web:3e54a76042a06077f81077",
            measurementId: "G-2762CJWVVJ"
          };
          
    }

    conectar() {
        this.instancia = firebase.initializeApp(this.firebaseConfig); 
    }

    salvar() {
        var dado = {
            nome:"rafa",
            idade:10
          };
        const db = this.instancia.database().ref('chave/' + 1000);
        db.set(dado);
    
    }

    consultar() {
        var dado = firebase.database().ref('chave/' + 1000);

        dado.on('value', (snapshot) => {
            const data = snapshot.val;
            console.log("Peneirinha", data);
        })

    
    }    
}
