import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class MakeCompanyAndSupplierNullable1679884181517
  implements MigrationInterface
{
  name = 'MakeCompanyAndSupplierNullable1679884181517';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Atualiza a coluna company para ser nullable
    await queryRunner.changeColumn(
      'user',
      'companyId',
      new TableColumn({
        name: 'companyId',
        type: 'int',
        isNullable: true,
      }),
    );

    // Atualiza a coluna supplier para ser nullable
    await queryRunner.changeColumn(
      'user',
      'supplierId',
      new TableColumn({
        name: 'supplierId',
        type: 'int',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverte a coluna company para não ser nullable
    await queryRunner.changeColumn(
      'user',
      'companyId',
      new TableColumn({
        name: 'companyId',
        type: 'int',
        isNullable: false,
      }),
    );

    // Reverte a coluna supplier para não ser nullable
    await queryRunner.changeColumn(
      'user',
      'supplierId',
      new TableColumn({
        name: 'supplierId',
        type: 'int',
        isNullable: false,
      }),
    );
  }
}
