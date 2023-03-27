import { Company } from 'src/companies/entities/company.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  email: string;

  @Column()
  whatsapp: string;

  @ManyToOne(() => Company, (company) => company.suppliers)
  company: Company;

  @Column()
  paymentMethod: string;

  @Column()
  bank: string;

  @Column()
  account: string;

  @Column()
  agency: string;

  @Column()
  pixtype: string;

  @Column()
  pixKey: string;

  @OneToMany(() => User, (user) => user.supplier)
  users: User[];

  @Column()
  granatumAccount: number;

  @Column()
  granatumCategorie: number;

  @Column()
  token: string;
}
