import { DataSource } from 'typeorm';
import { Company } from './entities/company.entity';

export const companiesProviders = [
  {
    provide: 'COMPANIES_PROVIDER',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Company),
    inject: ['DATA_SOURCE'],
  },
];
