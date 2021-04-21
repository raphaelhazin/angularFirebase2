import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { Pessoa } from './pessoa';
import {Firebase} from './../firebase';


@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();
  pessoas:Array<Pessoa>;
  db: Firebase;
  constructor() { 
    this.db = new Firebase();
    this.db.conectar();
    // db.consultar();
  }
  

  ngOnInit(): void {
    this.pessoas = new Array<Pessoa>();
  }

  form_submit(f: NgForm) {
    //  this.pessoas.push({ nome: f.form.controls.nome.value, sobrenome: f.form.controls.sobrenome.value });
    //  console.log(this.pessoas);
  }

  enviar() {
    this.db.salvar(this.pessoa);
  }

  monitorar() {
    this.db.consultar(this.pessoa);
  }

}
