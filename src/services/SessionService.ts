import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { EmpresaWebRepository } from "../repositories";

type UserRequest = {
  empweblogin: string;
  empwebsenha: string;
};

export class SessionService {
  async execute({ empweblogin, empwebsenha }: UserRequest) {
    const user = await EmpresaWebRepository().findOne({ empweblogin });

    if (!user) {
      return new Error("Usuário não existe");
    }

    const senhaMatch = await compare(empwebsenha, user.empwebsenha);

    if (!senhaMatch) {
      return new Error("Usuário ou senha incorretos!");
    }

    const token = sign({}, "oieusouogoku", {
      subject: user.empwebcodigo,
    });

    return { user, token };
  }
}
