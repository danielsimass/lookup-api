import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class TokenInSupplier1679936068487 implements MigrationInterface {
  name = 'TokenInSupplier1679936068487';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'supplier',
      new TableColumn({
        name: 'token',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('supplier', 'token');
  }
}
