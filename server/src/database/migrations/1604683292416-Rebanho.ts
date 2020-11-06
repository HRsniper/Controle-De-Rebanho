import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Rebanho1604683292416 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Rebanho",
        columns: [
          {
            name: "id",
            type: "integer",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "create_at", type: "timestamp", default: `${Date.now()}` },
          { name: "bezerros", type: "number", unsigned: true, default: 0 },
          { name: "bezerras", type: "number", unsigned: true, default: 0 },
          { name: "desmamados", type: "number", unsigned: true, default: 0 },
          { name: "desmamadas", type: "number", unsigned: true, default: 0 },
          { name: "garrotes", type: "number", unsigned: true, default: 0 },
          { name: "garrotas", type: "number", unsigned: true, default: 0 },
          { name: "novilhos", type: "number", unsigned: true, default: 0 },
          { name: "novilhas", type: "number", unsigned: true, default: 0 },
          { name: "touros", type: "number", unsigned: true, default: 0 },
          { name: "vacas", type: "number", unsigned: true, default: 0 },
          { name: "bois", type: "number", unsigned: true, default: 0 },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Rebanho");
  }
}
