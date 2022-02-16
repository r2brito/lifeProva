import { Request, Response } from "express";
import { EmpresaWebService } from "../services/EmpresaWebService";

export async function save(request: Request, response: Response) {
  const { empcodigo } = request.params;
  const { empwebnome, empweblogin, empwebsenha, empwebstatus } = request.body;

  const empresaWebService = new EmpresaWebService();

  const result = await empresaWebService.execute({
    empcodigo,
    empwebnome,
    empweblogin,
    empwebsenha,
    empwebstatus,
  });

  if (result instanceof Error) {
    return response.status(400).json(result.message);
  }

  return response.json(result);
}
