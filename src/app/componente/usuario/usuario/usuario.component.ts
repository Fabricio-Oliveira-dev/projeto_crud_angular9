import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-root',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  students: Array<User[]>;
  nome: String;
  total: number;
  p: number;

  constructor(private usuarioService: UsuarioService) { }

  /*carrega a lista de usuários*/
  ngOnInit() {
    this.usuarioService.getStudentList().subscribe(data => {
      this.students = data.content;
      this.total = data.totalElements;
    });
  }

  /*deleta o usuário*/
  deleteUsuario(id: Number, index) {

    if (confirm('Deseja mesmo remover?')) {
      this.usuarioService.deletarUsuario(id).subscribe(data => {
      this.students.splice(index, 1); /*remove da tela*/
      });
    }
  }

  /*consulta o usuário*/
  consultarUser() {

    if (this.nome === '') {
      this.usuarioService.getStudentList().subscribe(data => {
        this.students = data.content;
        this.total = data.totalElements;
      });
    }
    else {
      this.usuarioService.consultarUser(this.nome).subscribe(data => {
        this.students = data.content;
        this.total = data.totalElements;
      });
    }
  }

  /*carrega a lista de usuários por página*/
  carregarPagina(pagina) {

    if (this.nome !== '') {
      this.usuarioService.consultarUserPoPage(this.nome, (pagina - 1)).subscribe(data => {
        this.students = data.content;
        this.total = data.totalElements;
      });
    }
    else {
      this.usuarioService.getStudentListPage(pagina - 1).subscribe(data => {
        this.students = data.content;
        this.total = data.totalElements;
      });
    }
  }

  /*faz o download do relatório de usuários*/
  imprimeRelatorio() {
    return this.usuarioService.downloadPdfRelatorio();
  }
}
