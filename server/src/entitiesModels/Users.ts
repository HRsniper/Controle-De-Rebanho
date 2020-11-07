import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { IsBoolean, IsEmail, IsString, Length } from "class-validator";

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
}
