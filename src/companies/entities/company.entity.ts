import { Supplier } from 'src/suppliers/entities/supplier.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
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

  @Column()
  token: string;

  @OneToMany(() => Supplier, (supplier) => supplier.company)
  suppliers: Supplier[];

  @OneToMany(() => User, (user) => user.company)
  users: User[];
}
