export class SistemaAutenticacao {
  static login(autentical, senha) {
    return autentical.autenticar(senha);
  }
}
