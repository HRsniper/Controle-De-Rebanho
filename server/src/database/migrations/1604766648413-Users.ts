import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1604766648413 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Users",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "name", type: "varchar" },
          { name: "email", type: "varchar", isUnique: true },
          { name: "password", type: "varchar" },
          { name: "admin", type: "boolean", default: false },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Users");
  }
}
