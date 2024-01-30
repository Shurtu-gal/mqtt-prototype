/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EmptyService } from "../empty.service";
import { EmptyCreateInput } from "./EmptyCreateInput";
import { Empty } from "./Empty";
import { EmptyFindManyArgs } from "./EmptyFindManyArgs";
import { EmptyWhereUniqueInput } from "./EmptyWhereUniqueInput";
import { EmptyUpdateInput } from "./EmptyUpdateInput";

export class EmptyControllerBase {
  constructor(protected readonly service: EmptyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Empty })
  async createEmpty(@common.Body() data: EmptyCreateInput): Promise<Empty> {
    return await this.service.createEmpty({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Empty] })
  @ApiNestedQuery(EmptyFindManyArgs)
  async empties(@common.Req() request: Request): Promise<Empty[]> {
    const args = plainToClass(EmptyFindManyArgs, request.query);
    return this.service.empties({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Empty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async empty(
    @common.Param() params: EmptyWhereUniqueInput
  ): Promise<Empty | null> {
    const result = await this.service.empty({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Empty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEmpty(
    @common.Param() params: EmptyWhereUniqueInput,
    @common.Body() data: EmptyUpdateInput
  ): Promise<Empty | null> {
    try {
      return await this.service.updateEmpty({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Empty })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEmpty(
    @common.Param() params: EmptyWhereUniqueInput
  ): Promise<Empty | null> {
    try {
      return await this.service.deleteEmpty({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}