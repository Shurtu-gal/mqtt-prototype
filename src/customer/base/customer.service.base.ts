/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Customer, // @ts-ignore
  Order, // @ts-ignore
  Organization,
} from "@prisma/client";

export class CustomerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CustomerCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerCountArgs>
  ): Promise<number> {
    return this.prisma.customer.count(args);
  }

  async customers<T extends Prisma.CustomerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerFindManyArgs>
  ): Promise<Customer[]> {
    return this.prisma.customer.findMany(args);
  }
  async customer<T extends Prisma.CustomerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerFindUniqueArgs>
  ): Promise<Customer | null> {
    return this.prisma.customer.findUnique(args);
  }
  async createCustomer<T extends Prisma.CustomerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerCreateArgs>
  ): Promise<Customer> {
    return this.prisma.customer.create<T>(args);
  }
  async updateCustomer<T extends Prisma.CustomerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerUpdateArgs>
  ): Promise<Customer> {
    return this.prisma.customer.update<T>(args);
  }
  async deleteCustomer<T extends Prisma.CustomerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerDeleteArgs>
  ): Promise<Customer> {
    return this.prisma.customer.delete(args);
  }

  async findOrders(
    parentId: bigint,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.customer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }

  async getOrganization(parentId: bigint): Promise<Organization | null> {
    return this.prisma.customer
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }

  async getVipOrganization(parentId: bigint): Promise<Organization | null> {
    return this.prisma.customer
      .findUnique({
        where: { id: parentId },
      })
      .vipOrganization();
  }
}
