import { Ratreamento } from "../entity/Ratreamento";
import { RatreamentoRepository } from "../repositories";

export class GetRastreamentosService {
  async execute(): Promise<Ratreamento[]> {
    const rastreamentos = RatreamentoRepository().find();
    return rastreamentos;
  }
}
