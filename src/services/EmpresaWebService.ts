import { hash } from "bcryptjs";
import { EmpresaWeb } from "../entity/EmpresaWeb";
import { EmpresaRepository, EmpresaWebRepository } from "../repositories";

type EmpresaWebRequest = {
  empcodigo: string;
  empwebnome: string;
  empweblogin: string;
  empwebsenha: string;
  empwebstatus: string;
};

export class EmpresaWebService {
  async execute({
    empcodigo,
    empwebnome,
    empweblogin,
    empwebsenha,
    empwebstatus,
  }: EmpresaWebRequest): Promise<EmpresaWeb | Error> {
    const existEmpresa = await EmpresaRepository().findOne({ empcodigo });

    if (!existEmpresa) {
      return new Error("Empresa não encontrada");
    }

    const senhaHash = await hash(empwebsenha, 8);

    const empresaweb = EmpresaWebRepository().create({
      empcodigo: existEmpresa,
      empwebnome,
      empweblogin,
      empwebsenha: senhaHash,
      empwebstatus,
    });

    await EmpresaWebRepository().save(empresaweb);

    return empresaweb;
  }
}
