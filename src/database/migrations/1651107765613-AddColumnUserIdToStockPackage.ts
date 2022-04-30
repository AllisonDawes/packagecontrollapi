import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export default class AddColumnUserIdToScorePackage1651107765613
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "score_packages",
      new TableColumn({
        name: "user_id",
        type: "uuid",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      "score_packages",
      new TableForeignKey({
        name: "UserStockPackages",
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("score_packages", "UserStockPackages");
    await queryRunner.dropColumn("score_packages", "user_id");
  }
}
