import { Empresa } from "../entity/Empresa";
import { EmpresaWeb } from "../entity/EmpresaWeb";
import { Ratreamento } from "../entity/Ratreamento";
import { getRepository } from "typeorm";

export const EmpresaRepository = () => {
  return getRepository(Empresa);
};

export const EmpresaWebRepository = () => {
  return getRepository(EmpresaWeb);
};

export const RatreamentoRepository = () => {
  return getRepository(Ratreamento);
};
