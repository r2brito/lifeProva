import { Empresa } from "../entity/Empresa";
import { EmpresaRepository } from "../repositories";

type EmpresaRequest = {
  empnome: string;
};

export class EmpresaService {
  async execute({ empnome }: EmpresaRequest): Promise<Empresa | Error> {
    const existEmpresa = await EmpresaRepository().findOne({ empnome });

    if (existEmpresa) {
      return new Error("Empresa já existe");
    }
    const empresa = EmpresaRepository().create({ empnome });

    await EmpresaRepository().save(empresa);

    return empresa;
  }
}
