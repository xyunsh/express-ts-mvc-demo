import { Controller, Get, Post, HttpCode, Body, Param, Render, Inject } from '@nestjs/common';

import BaseController from '../../base.controller';
import { Department } from '../../../employees/entities/Department';

@Controller('dept')
export class DepartmentController extends BaseController<Department>{
    constructor(
        @Inject('DepartmentRepository') private readonly deptRepository: typeof Department,
    ){
        super(deptRepository);
    }

    @Post()
    async create( @Body() dto ){

    }
}