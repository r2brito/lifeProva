import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import cors from "cors";
import * as SessionController from "./src/controllers/SessionController";
import * as EmpresaController from "./src/controllers/EmpresaController";
import * as EmpresaWebController from "./src/controllers/EmpresaWebController";
import * as RastreamentoController from "./src/controllers/RastreamentoController";

const PORT = 3000;

async function startup() {
  await createConnection();
  const app = express();

  app.use(express.json());
  app.use(cors());

  // login
  app.post("/login", SessionController.handle);

  // Empresa
  app.post("/empresa", EmpresaController.save);

  // EmpresaWeb
  app.post("/empresaweb/:empcodigo", EmpresaWebController.save);

  // EmpresaWeb
  app.post("/rastreamento/", RastreamentoController.save);
  app.get("/rastreamento", RastreamentoController.getAll);

  app.listen(PORT, () => {
    console.log("App running on port " + 3000);
  });
}

startup();
