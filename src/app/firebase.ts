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

    salvar(dado) {
        // var dado = {
        //     nome:"rafa",
        //     idade:10
        //   };
        var db = this.instancia.database().ref(dado.id +'/');
        db.set(dado);
    
    }

    consultar(dado) {
        var db = this.instancia.database().ref(dado.id +'/');
        db.on('value', (snapshot) => {
            const data = snapshot.val();
            console.log("Peneirinha", data);
        })

    
    }    
}
