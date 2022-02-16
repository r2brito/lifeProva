import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  ManyToOne,
  JoinColumn,
  ManyToMany,
} from "typeorm";

import { Empresa } from "./Empresa";

@Entity()
export class EmpresaWeb {
  @PrimaryGeneratedColumn("uuid")
  empwebcodigo: string;

  @ManyToMany(() => Empresa, (empresa: Empresa) => empresa.empresaWeb)
  @JoinColumn()
  empcodigo: Empresa;

  @Column("varchar")
  empwebnome: string;

  @Column("varchar")
  empweblogin: string;

  @Column("varchar")
  empwebsenha: string;

  @Column("varchar")
  empwebstatus: string;
}
