import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToMany,
  ManyToMany,
} from "typeorm";

import { EmpresaWeb } from "./EmpresaWeb";

@Entity()
export class Empresa {
  @PrimaryGeneratedColumn("uuid")
  empcodigo: string;

  @Column("varchar")
  empnome: string;

  @ManyToMany(
    () => EmpresaWeb,
    (empresaWeb: EmpresaWeb) => empresaWeb.empcodigo,
    {
      cascade: true,
    }
  )
  empresaWeb: EmpresaWeb;
}
