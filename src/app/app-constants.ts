export class AppConstants {

	public static get baseServidor(): string { return "https://www.projetojavaweb.com/" }

	public static get baseLogin(): string { return this.baseServidor + "cursospringrestapi/login" }

	public static get baseUrl(): string {return this.baseServidor + "cursospringrestapi/usuario/"}

	public static get getBaseUrlPath() : string {return this.baseServidor + "cursospringrestapi/"}


}
