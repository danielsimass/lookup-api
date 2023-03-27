import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Supplier } from './entities/supplier.entity';

@Injectable()
export class SupplierRepository extends Repository<Supplier> {}
