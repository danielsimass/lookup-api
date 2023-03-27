import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyRepository extends Repository<Company> {}
