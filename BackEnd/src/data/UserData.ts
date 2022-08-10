import { BaseDatabase } from "./BaseDataBase";

const TABLE_NAME = "CADASTRO_IN8";

export default class UserData extends BaseDatabase {
  public createUser = async (
    nome: string,
    email: string,
    nascimento: string,
    telefone: string
  )/* : Promise<void> */ => {
    try {
      await this.getConnection()
        .insert({
          nome,
          email,
          nascimento,
          telefone,
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
}
