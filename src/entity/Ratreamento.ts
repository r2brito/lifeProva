import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Ratreamento {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("int")
  veiccodigo: number;

  @Column("varchar")
  veicnome: string;

  @CreateDateColumn()
  rastdata: Date;

  @Column("double precision")
  rastlatitude: number;

  @Column("double precision")
  rastlongitude: number;
}
