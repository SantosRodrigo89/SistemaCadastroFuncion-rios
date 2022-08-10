enum DEPARTAMENTO_TYPES {
  ADMINISTRATIVO = "administrativo",
  SUPORTE = "suporte"
}

export type user = {
  nome: string;
  nascimento: string;
  salario: string;
  departamento: DEPARTAMENTO_TYPES;
};
