import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConstants } from '../app-constants';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserReport } from '../model/UserReport';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  /*retorna a lista de usuário */
  getStudentList(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl);
  }
  /*retorna a lista de profissões */
  getProfissaoList(): Observable<any> {
    return this.http.get<any>(AppConstants.getBaseUrlPath + 'profissao/');
  }

  getStudentListPage(pagina): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + 'page/' + pagina);
  }

  /*retorna o usuário */
  getStudant(id): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + id);
  }

  /*delte the user by id */
  deletarUsuario(id: Number): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + id, { responseType: 'text' });
  }

  /* procura o usuário pelo nome*/
  consultarUser(nome: String): Observable<any> {
    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome);
  }

  consultarUserPoPage(nome: String, page: Number): Observable<any> {
    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome + "/page/" + page);
  }

  /*salva o usuário*/
  salvarUsuario(user): Observable<any> {
    return this.http.post<any>(AppConstants.baseUrl, user);
  }

  /*atualiza o usuário*/
  updateUsuario(user): Observable<any> {
    return this.http.put<any>(AppConstants.baseUrl, user);
  }

  /*remove o usuário por ID*/
  removerTelefonte(id): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + "removerTelefone/" + id, { responseType: 'text' });
  }

  /*verifica se o usuário é autenticado*/
  userAutenticado() {
    if (localStorage.getItem('token') !== null &&
      localStorage.getItem('token').toString().trim() !== null) {
      return true;
    } else {
      return false;
    }
  }

  /*faz o download do relatório*/
  downloadPdfRelatorio() {
    return this.http.get(AppConstants.baseUrl + 'relatorio', { responseType: 'text' }).subscribe(data => {
      document.querySelector('iframe').src = data;
    });
  }
    /*faz o download do relatório por parâmetros*/
    downloadPdfRelatorioParam(userreport : UserReport) {
     return this.http.post(AppConstants.baseUrl + 'relatorio/', userreport , { responseType: 'text' }).subscribe(data => {
       document.querySelector('iframe').src = data;
     });
  }

  /*carrega o gráfico*/
  carregarGrafico() : Observable<any> {
    return this.http.get(AppConstants.baseUrl + 'grafico');
  }
}
