import { Request, Response } from "express";
import { RastreamentoService } from "../services/RastreamentoService";
import { GetRastreamentosService } from "../services/GetRastreamentosService";

export async function save(request: Request, response: Response) {
  const { veiccodigo, veicnome, rastlatitude, rastlongitude } = request.body;

  const rastreamentoService = new RastreamentoService();

  const result = await rastreamentoService.execute({
    veiccodigo,
    veicnome,
    rastlatitude,
    rastlongitude,
  });

  if (result instanceof Error) {
    return response.status(400).json(result.message);
  }

  return response.json(result);
}

export async function getAll(request: Request, response: Response) {
  const getrastreamentoService = new GetRastreamentosService();

  const result = await getrastreamentoService.execute();

  return response.json(result);
}
