import { BaseDatabase } from "./BaseDataBase";

const TABLE_NAME = "CDC_EMPLOYEE";

export default class UserData extends BaseDatabase {
  public createUser = async (
    nome: string,
    cpf: string,
    nascimento: string,
    salario: string,
    departamento: string
  )/* : Promise<void> */ => {
    try {
      await this.getConnection()
        .insert({
          nome,
          cpf,
          nascimento,
          salario,
          departamento
        })
        .into(TABLE_NAME);
    } catch (error: any) {
      console.log("error", error.message);
      
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public getUsers = async (): Promise<any> => {
    try {
      const result = await this.getConnection().select("*").from(TABLE_NAME);

      if (!result[0]) {
        throw new Error("Sem usuários registrados");
      }

      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };


public getUserById = async (id: string): Promise<any> => {
  try {
    const result = await this.getConnection()
      .select("*")
      .from(TABLE_NAME)
      .where({ id });

    if (!result[0]) {
      throw new Error("Usuário não encontrado");
    }

    return result;
  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message);
  }
}

public updateUser = async (
  id: string,
  nome: string,
  cpf: string,
  nascimento: string,
  salario: string,
  departamento: string
): Promise<void> => {
  try {
    await this.getConnection()
      .update({
        nome,
        cpf,
        nascimento,
        salario,
        departamento
      })
      .into(TABLE_NAME)
      .where({ id });
  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message);
  }
}

public deleteUser = async (id: string): Promise<void> => {
  try {
    await this.getConnection().delete().from(TABLE_NAME).where({ id });
  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message);
  }
}


}
