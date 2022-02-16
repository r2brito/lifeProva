import { Ratreamento } from "../entity/Ratreamento";
import { RatreamentoRepository } from "../repositories";

type RastreamentoRequest = {
  veiccodigo: number;
  veicnome: string;
  rastlatitude: number;
  rastlongitude: number;
};

export class RastreamentoService {
  async execute({
    veiccodigo,
    veicnome,
    rastlatitude,
    rastlongitude,
  }: RastreamentoRequest): Promise<Ratreamento | Error> {
    const rastreamento = RatreamentoRepository().create({
      veiccodigo,
      veicnome,
      rastlatitude,
      rastlongitude,
    });

    await RatreamentoRepository().save(rastreamento);

    return rastreamento;
  }
}
