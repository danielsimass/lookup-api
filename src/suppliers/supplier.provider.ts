import { DataSource } from 'typeorm';
import { Supplier } from './entities/supplier.entity';

export const suppliersProviders = [
  {
    provide: 'SUPPLIERS_PROVIDER',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Supplier),
    inject: ['DATA_SOURCE'],
  },
];
