import { Company } from 'src/companies/entities/company.entity';
import { Supplier } from 'src/suppliers/entities/supplier.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  type: string;

  @ManyToOne(() => Company, (company) => company.users, { nullable: true })
  company: Company;

  @ManyToOne(() => Supplier, (supplier) => supplier.users, { nullable: true })
  supplier: Supplier;
}
