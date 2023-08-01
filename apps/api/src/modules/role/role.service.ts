import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class RoleService {
  constructor(protected readonly prisma: PrismaService) {}

  async findMany() {
    return this.prisma.role.findMany();
  }
}
