import { Inject, Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SupplierRepository } from './supplier.repository';

@Injectable()
export class SuppliersService {
  constructor(
    @Inject('SUPPLIERS_PROVIDER')
    private supplierRepository: SupplierRepository,
  ) {}
  create(createSupplierDto: CreateSupplierDto) {
    console.log(createSupplierDto)
    return this.supplierRepository.save(createSupplierDto);
  }

  findAll() {
    return this.supplierRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} supplier`;
  }

  update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return `This action updates a #${id} supplier`;
  }

  remove(id: number) {
    return `This action removes a #${id} supplier`;
  }
}
