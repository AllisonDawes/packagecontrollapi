import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export default class AddColumnPackageIdToStockPackage1651103821350
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "stock_packages",
      new TableColumn({
        name: "package_id",
        type: "uuid",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      "stock_packages",
      new TableForeignKey({
        name: "StockPckagesPackage",
        columnNames: ["package_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "packages",
        onDelete: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("stock_packages", "StockPackagesPackage");
    await queryRunner.dropColumn("stock_packages", "package_id");
  }
}
