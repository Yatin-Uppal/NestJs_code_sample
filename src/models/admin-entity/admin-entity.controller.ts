import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, UseGuards, Catch } from '@nestjs/common';
import { AdminEntityService } from './admin-entity.service';
import { CreateAdminEntityDto } from './dto/create-admin-entity.dto';
import { UpdateAdminEntityDto } from './dto/update-admin-entity.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SuperUserGuard } from '../../common/guards/superUserGuard/super-user.guard';
import { apiResponse } from 'src/interfaces/apiResponse.interface';
@Catch()
@ApiTags('admin-entity')
@Controller('admin-entity')
export class AdminEntityController {
  constructor(private readonly adminEntityService: AdminEntityService) { }

  @UseGuards(SuperUserGuard())
  @ApiOperation({ summary: 'API to create Admin Entity.' })
  @Post('/')
  async create(@Body() body: CreateAdminEntityDto): Promise<apiResponse> {
    try {
      const adminEntity = await this.adminEntityService.createAdminEntity(body).catch((error) => {
         
        throw "Error occurred while creating adminEntity."
      })
      await this.adminEntityService.saveAdminEntity(adminEntity).catch((error) => {
         
        throw "Error occurred while saving AdminEntity."
      })
      return { items: [adminEntity] }
    } catch (error) {
       
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
  @UseGuards(SuperUserGuard())
  @ApiOperation({ summary: 'API to get the list of AdminEntity.' })
  @Get('/list')
  async getAdminEntityList(): Promise<apiResponse> {
    try {
      const adminEntityList = await this.adminEntityService.findAll()
      return { items: adminEntityList }
    } catch (error) {
       
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @UseGuards(SuperUserGuard())
  @ApiOperation({ summary: 'API to get the details of Admin Entity.' })
  @Get(':adminEntityId')
  async getAdminEntityDetails(@Param('adminEntityId') adminEntityId: string): Promise<apiResponse> {
    try {
      const adminEntity = await this.adminEntityService.getDetailsOfAdminEntity(adminEntityId).catch((error) => {
         
        throw "Error occurred while fetching the details of AdminEntity."
      })
      return { items: [adminEntity] }
    } catch (error) {
       
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
  @UseGuards(SuperUserGuard())
  @ApiOperation({ summary: 'API to update Admin Entity.' })
  @Patch(':adminEntityId')
  async update(@Param('adminEntityId') adminEntityId: string, @Body() body: UpdateAdminEntityDto): Promise<apiResponse> {
    try {
      const updatedAdminEntity = await this.adminEntityService.updateAdminEntity(adminEntityId, body).catch((error) => {
         
        throw "Error occurred while updating AdminEntity."
      })
      await this.adminEntityService.saveUpdatedAdminEntity(updatedAdminEntity.adminEntityId, updatedAdminEntity).catch((error) => {
         
        throw "Error occurred while saving updated AdminEntity."
      })
      return { message: "AdminEntity updated successfully.", items: [updatedAdminEntity] }
    } catch (error) {
       
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @UseGuards(SuperUserGuard())
  @ApiOperation({ summary: 'API to delete Admin Entity.' })
  @Delete(':adminEntityId')
  async remove(@Param('adminEntityId') adminEntityId: string): Promise<apiResponse> {
    try {
      await this.adminEntityService.deleteAdminEntity(adminEntityId).catch((error) => {
         
        throw error
      })
      return { message: "AdminEntity deleted successfully."}
    } catch (error) {
       
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
