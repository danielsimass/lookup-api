import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddGranatumAccountAndCategoryInSupplier1679933532904
  implements MigrationInterface
{
  name = 'AddGranatumAccountAndCategoryInSupplier1679933532904';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'supplier',
      new TableColumn({
        name: 'granatumAccount',
        type: 'number',
        isNullable: true,
      }),
    );

    await queryRunner.addColumn(
      'supplier',
      new TableColumn({
        name: 'granatumCategorie',
        type: 'number',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('supplier', 'granatumAccount');
    await queryRunner.dropColumn('supplier', 'granatumCategorie');
  }
}
