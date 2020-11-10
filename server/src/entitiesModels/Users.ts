import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { IsBoolean, IsEmail, IsString, Length } from "class-validator";
import { Rebanho } from "./Rebanho";

@Entity("Users")
@Unique(["email"])
export class Users {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsString()
  password: string;

  @Column()
  @IsBoolean()
  // @IsString()
  // @Length(4, 5)
  admin: boolean;

  @OneToMany(() => Rebanho, (rebanho) => rebanho.user_id, { cascade: ["insert", "update"] })
  @JoinColumn({ name: "user_id" })
  rebanho: Rebanho[];
}
