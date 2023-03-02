import { Telefone } from './Telefone';
import { Profissao } from './Profissao';

export class User {
	id: Number;
	login: String;
	senha: String;
	nome: String;
	cpf: String;
	dataNascimento: String;
	profissao: Profissao = new Profissao();

	salario: DoubleRange;

	telefones: Array<Telefone>;



}
