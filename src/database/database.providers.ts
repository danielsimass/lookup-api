import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'postgres',
  host: '172.17.0.2',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'lookup',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: ['dist/database/migrations/**'],
});
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];
