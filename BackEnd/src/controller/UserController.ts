import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDataBase";
import { user } from "../types/user";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  createUser = async (req: Request, res: Response) => {
    try {
      const { nome, nascimento, salario, departamento } = req.body;

      const input: user = {
        nome,
        nascimento,
        salario,
        departamento,
      };

      await this.userBusiness.createUser(input);

      res.status(200).send({
        message: "Usuário criado com sucesso",
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro no registro");
    }
    await BaseDatabase.destroyConnection();

  }

    getUsers = async (req: Request, res: Response) => {
      try {
        const resp = await this.userBusiness.getUsers();
        res.status(200).send(resp);
      } catch (error) {
        if (error instanceof Error) {
          return res.status(400).send(error.message);
        }
        res.status(500).send("Erro na solicitação");
      }
      await BaseDatabase.destroyConnection();
    };
  

  getUserById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const resp = await this.userBusiness.getUserById(id);
      res.status(200).send(resp);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro na solicitação");
    }
    await BaseDatabase.destroyConnection();
  };

  updateUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { nome, nascimento, salario, departamento } = req.body;

      const input: user = {
        nome,
        nascimento,
        salario,
        departamento,
      };

      await this.userBusiness.updateUser(id, input);

      res.status(200).send({
        message: "Usuário atualizado com sucesso",
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro na solicitação");
    }
    await BaseDatabase.destroyConnection();
  };

  deleteUser = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await this.userBusiness.deleteUser(id);

      res.status(200).send({
        message: "Usuário deletado com sucesso",
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro na solicitação");
    }
    await BaseDatabase.destroyConnection();
  };
}
