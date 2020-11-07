import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsDateString, IsNumber, Length, Min } from "class-validator";

@Entity("Rebanho")
export class Rebanho {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  @IsDateString()
  @Length(24, 24)
  create_at: string;

  @Column()
  @IsNumber()
  bezerros: number;

  @Column()
  @IsNumber()
  bezerras: number;

  @Column()
  @IsNumber()
  desmamados: number;

  @Column()
  @IsNumber()
  desmamadas: number;

  @Column()
  @IsNumber()
  garrotes: number;

  @Column()
  @IsNumber()
  garrotas: number;

  @Column()
  @IsNumber()
  novilhos: number;

  @Column()
  @IsNumber()
  novilhas: number;

  @Column()
  @IsNumber()
  touros: number;

  @Column()
  @IsNumber()
  vacas: number;

  @Column()
  @IsNumber()
  bois: number;
}
