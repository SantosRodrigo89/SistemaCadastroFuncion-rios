enum DEPARTAMENTO_TYPES {
  ADMINISTRATIVO = "administrativo",
  SUPORTE = "suporte"
}

export type user = {
  nome: string;
  cpf: string;
  nascimento: string;
  salario: string;
  departamento: DEPARTAMENTO_TYPES;
};
