import UserData from "../data/UserData";
import { BaseError } from "../error/BaseError";
import { user } from "../types/user";

const userDB = new UserData();

export class UserBusiness {
  constructor(private userData: UserData) {}

  async createUser(user: user) {
    try {
      const { nome, email, nascimento, telefone } = user;

      if (!nome || !email || !nascimento || !telefone) {
        throw new BaseError(422, "Por favor preencha todos os campos");
      }

      return await userDB.createUser(
        user.nome,
        user.email,
        user.nascimento,
        user.telefone
      );
    } catch (error: any) {
      throw new Error(error.message || "Erro ao criar usuário");
    }
  }

  async getUsers() {
    const usersFromDB = await userDB.getUsers();

    return usersFromDB;
  }
}
