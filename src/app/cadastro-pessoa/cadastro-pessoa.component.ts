import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  pessoas:Array<any>;
  constructor() { }
  

  ngOnInit(): void {
    this.pessoas = new Array<any>();
  }

  form_submit(f: NgForm) {
     this.pessoas.push({ nome: f.form.controls.nome.value, sobrenome: f.form.controls.sobrenome.value });
     console.log(this.pessoas);
    }

}
