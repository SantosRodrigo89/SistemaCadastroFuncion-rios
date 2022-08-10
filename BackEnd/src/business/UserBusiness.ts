import UserData from "../data/UserData";
import { BaseError } from "../error/BaseError";
import { user } from "../types/user";

const userDB = new UserData();

export class UserBusiness {
  constructor(private userData: UserData) {}

  async createUser(user: user) {
    try {
      const { nome, cpf,  nascimento, salario, departamento } = user;

      if (!nome || !cpf || !nascimento || !salario || !departamento) {
        throw new BaseError(422, "Por favor preencha todos os campos");
      }

      if(departamento !== "administrativo" && departamento !== "suporte") {
        throw new BaseError(422, "Departamento inválido");
      }

      return await userDB.createUser(
        user.nome,
        user.cpf,
        user.nascimento,
        user.salario,
        user.departamento
      );
    } catch (error: any) {
      throw new Error(error.message || "Erro ao criar usuário");
    }
  }

  async getUsers() {
    const usersFromDB = await userDB.getUsers();

    return usersFromDB;
  }


async getUserById(id: string) {
  try {
    const userFromDB = await userDB.getUserById(id);

    return userFromDB;
  } catch (error: any) {
    throw new Error(error.message || "Erro ao buscar usuário");
  }
}

async updateUser (id: string, user: user) {
  try {
    const { nome, cpf, nascimento, salario, departamento } = user;

    if (!nome || !cpf || !nascimento || !salario || !departamento) {
      throw new BaseError(422, "Por favor preencha todos os campos");
    }

    const userFromDB = await userDB.updateUser(id, nome, cpf,  nascimento, salario, departamento);

    return userFromDB;
  } catch (error: any) {
    throw new Error(error.message || "Erro ao atualizar usuário");
  }
}

async deleteUser (id: string) {
  try {
    const userFromDB = await userDB.deleteUser(id);

    return userFromDB;
  }
  catch (error: any) {
    throw new Error(error.message || "Erro ao deletar usuário");
  }
}

}

