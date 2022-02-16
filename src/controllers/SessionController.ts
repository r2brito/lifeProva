import { Request, Response } from "express";
import { SessionService } from "../services/SessionService";

export async function handle(request: Request, response: Response) {
  const { empweblogin, empwebsenha } = request.body;

  const sessionService = new SessionService();

  const result = await sessionService.execute({
    empweblogin,
    empwebsenha,
  });

  if (result instanceof Error) {
    return response.status(400).json(result.message);
  }

  return response.status(200).json(result);
}
