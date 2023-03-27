export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  type: string;
  companyId?: number;
  supplierId?: number;
}
