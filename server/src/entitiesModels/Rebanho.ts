import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Rebanho")
export class Rebanho {
  @PrimaryGeneratedColumn("increment")
  id: number;
}
