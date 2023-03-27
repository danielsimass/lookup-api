import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateSupplierTable1679878919531 implements MigrationInterface {
  name = 'CreateSupplierTable1679878919531';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'supplier',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'cnpj',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'whatsapp',
            type: 'varchar',
          },
          {
            name: 'paymentMethod',
            type: 'varchar',
          },
          {
            name: 'bank',
            type: 'varchar',
          },
          {
            name: 'account',
            type: 'varchar',
          },
          {
            name: 'agency',
            type: 'varchar',
          },
          {
            name: 'pixtype',
            type: 'varchar',
          },
          {
            name: 'pixKey',
            type: 'varchar',
          },
          {
            name: 'companyId',
            type: 'int',
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'supplier',
      new TableForeignKey({
        columnNames: ['companyId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'company',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "supplier" DROP CONSTRAINT "FK_860a390e2874a2150121f36ae9d"`,
    );
    await queryRunner.query(`DROP TABLE "supplier"`);
  }
}
