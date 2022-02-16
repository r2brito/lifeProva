import { Request, Response } from "express";
import { EmpresaService } from "../services/EmpresaService";

export async function save(request: Request, response: Response) {
  const { empnome } = request.body;

  const empresaService = new EmpresaService();

  const result = await empresaService.execute({
    empnome,
  });

  if (result instanceof Error) {
    return response.status(400).json(result.message);
  }

  return response.status(200).json(result);
}
