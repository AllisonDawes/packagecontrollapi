import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export default class AddColumnPackageIdToScorePackage1651103821350
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "score_packages",
      new TableColumn({
        name: "package_id",
        type: "uuid",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      "score_packages",
      new TableForeignKey({
        name: "StockPackagesPackage",
        columnNames: ["package_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "packages",
        onDelete: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("score_packages", "StockPackagesPackage");
    await queryRunner.dropColumn("score_packages", "package_id");
  }
}
