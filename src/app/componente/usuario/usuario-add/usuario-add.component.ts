import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Telefone } from 'src/app/model/Telefone';
import { NgbDateParserFormatter, NgbDateStruct, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { Profissao } from 'src/app/model/Profissao';

@Injectable()
export class FormatDateAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '/';
  /*retorna a data*/
  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }
}

@Injectable()
export class FormataData extends NgbDateParserFormatter {

  readonly DELIMITER = '/'; // 18/10/1987
  /*converte a data para o formato dd/mm/yyyy*/
  parse(value: string): NgbDateStruct | null {

    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct): string | null {
    return date ? validarDia(date.day) + this.DELIMITER + validarDia(date.month) + this.DELIMITER + date.year : '';
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : null;
  }

}

/*adiciona 0 na frente do número se ele for menor do que 10*/
function validarDia(valor) {
  if (valor.toString !== '' && parseInt(valor) <= 9) {
    return '0' + valor;
  } else {
    return valor;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css'],
  providers: [{ provide: NgbDateParserFormatter, useClass: FormataData },
  { provide: NgbDateAdapter, useClass: FormatDateAdapter }]
})
export class UsuarioAddComponent implements OnInit {

  usuario = new User();

  telefone = new Telefone();

  profissoes : Array<Profissao>;

  constructor(private routeActive: ActivatedRoute, private userService: UsuarioService) { }

  /*retorna os dados do usuário*/
  ngOnInit() {
     this.userService.getProfissaoList().subscribe(data => {
       this.profissoes = data;
     });

    let id = this.routeActive.snapshot.paramMap.get('id');

    if (id != null) {
      this.userService.getStudant(id).subscribe(data => {
        this.usuario = data;
        console.log(this.usuario);
      });
    }
  }

  /*salva o usuário*/
  salvarUser() {

    if (this.usuario.id != null && this.usuario.id.toString().trim() != null) { /* atualizando ou editando*/
      this.userService.updateUsuario(this.usuario).subscribe(data => {
        this.novo();
        console.info("User Atualizado: " + data);
      });
    } else {
      this.userService.salvarUsuario(this.usuario).subscribe(data => { /*salvando um novo User */
        this.novo();
        console.info("Gravou User: " + data);
      });
    }
  }

  /*deletando o telefone do usuário por ID*/
  deletarTelefone(id, i) {

    if (id == null) {
      this.usuario.telefones.splice(i, 1);
      return;
    }

    if (id !== null && confirm("Deseja remover?")) {
      this.userService.removerTelefonte(id).subscribe(data => {
      this.usuario.telefones.splice(i, 1);
      });
    }
  }

  /*adiciona um novo telefone ao usuário*/
  addFone() {

    if (this.usuario.telefones === undefined) {
      this.usuario.telefones = new Array<Telefone>();
    }

    this.usuario.telefones.push(this.telefone);
    this.telefone = new Telefone();

  }

  /*cria um novo usuário*/
  novo() {
    this.usuario = new User();
    this.telefone = new Telefone();
  }
}
