class Estudante {
    constructor(nome, email, ra, curso, disciplinas) {
      this.nome = nome;
      this.email = email;
      this.ra = ra;
      this.curso = curso;
      this.disciplinas = disciplinas;
    }
  
    
    imprimirDados() {
      console.log("Nome: " + this.nome);
      console.log("E-mail: " + this.email);
      console.log("RA: " + this.ra);
      console.log("Curso: " + this.curso);
      console.log("Disciplinas:");
      for (let i = 0; i < this.disciplinas.length; i++) {
        console.log("- " + this.disciplinas[i]);
      }
    }
  }
  
  // Criando dois estudantes de exemplo
  const estudante1 = new Estudante(
    "João da Silva",
    "joao.silva@email.com",
    "123456",
    "Engenharia",
    ["Cálculo I", "Física I", "Introdução à Engenharia"]
  );
  
  const estudante2 = new Estudante(
    "Maria Santos",
    "maria.santos@email.com",
    "654321",
    "Administração",
    ["Administração Financeira", "Gestão de Pessoas", "Marketing"]
  );
  
  // imprimindo os valores na tela
  estudante1.imprimirDados();
  estudante2.imprimirDados();