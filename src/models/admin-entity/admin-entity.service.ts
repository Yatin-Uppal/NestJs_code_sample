import { Injectable } from '@nestjs/common';
import { CreateAdminEntityDto } from './dto/create-admin-entity.dto';
import { UpdateAdminEntityDto } from './dto/update-admin-entity.dto';
import { AdminEntityRepository } from './admin-entity.repository';
import { adminEntitySchema } from './schema/adminEntity.schema';
import { adminEntityTypeEnum, statesEnum } from 'src/common/enums/common.enum';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class AdminEntityService {
  constructor(private adminEntityRepository: AdminEntityRepository) {

  }

  /**
   * Purpose: Common function to save Admin Entities.
   * @param body 
   * @returns 
   */
  async saveAdminEntity(body) {
    try {
      return await this.adminEntityRepository.create(body).catch((error) => {
        throw error
      })
    } catch (error) {
         
      throw error
    }
  }

  /**
   * Purpose: common function to save updated Admin Entity.
   * @param adminEntityId 
   * @param body 
   * @returns 
   */
  async saveUpdatedAdminEntity(adminEntityId, body) {
    try {
      const adminEntity = await this.adminEntityRepository.fetchSingleData({ adminEntityId: adminEntityId })
      if (!adminEntity) {
        throw "AdminEntity does not exist."
      }
      return await this.adminEntityRepository.update({ adminEntityId: adminEntityId }, body).catch((error) => {
           
        throw error
      })
    } catch (error) {
         
      throw error
    }
  }

  /**
   * Purpose: Common function to create Admin Entity.
   * @param body 
   * @returns 
   */
  async createAdminEntity(body: CreateAdminEntityDto) {
    try {

      const adminEntity = new adminEntitySchema()
      adminEntity.adminEntityId = uuidv4()
      adminEntity.firstName = body.firstName ? body.firstName : ''
      adminEntity.lastName = body.lastName ? body.lastName : ''
      adminEntity.email = body.email ? body.email : '';
      adminEntity.status = body.status ? body.status : statesEnum.CREATED;
      adminEntity.phoneNumber = body.phoneNumber ? body.phoneNumber : '';
      adminEntity.entityType = body.entityType ? body.entityType : adminEntityTypeEnum.ADMIN;

      return adminEntity;

    } catch (error) {
         
      throw error
    }
  }

  /**
   * Purpose: Common function to find the list of AdminEntities
   * @returns 
   */
  async findAll() {
    try {
      const adminEntityList = await this.adminEntityRepository.fetchMultipleData({}).catch((error) => {
           
        throw error
      })
      return adminEntityList
    } catch (error) {
         
      throw error
    }
  }

  /**
   * Purpose: Common function to get the details of Admin Entities
   * @param adminEntityId 
   * @returns 
   */
  async getDetailsOfAdminEntity(adminEntityId: string) {
    try {
      const adminEntityDetails = await this.adminEntityRepository.fetchSingleData({ adminEntityId: adminEntityId }).catch((error) => {
           
        throw "Error occurred while fetching the details of AdminEntity."
      })
      return adminEntityDetails;
    } catch (error) {
         
      throw error
    }
  }
  /**
   * Purpose: Common function to update Admin Entity
   * @param adminEntityId 
   * @param body 
   * @returns 
   */
  async updateAdminEntity(adminEntityId: string, body: UpdateAdminEntityDto) {
    try {
      const adminEntity = await this.adminEntityRepository.fetchSingleData({ adminEntityId: adminEntityId }).catch((error) => {
           
        throw "Error occurred while fetching the details of AdminEntity."
      })
      body.firstName ? adminEntity.firstName = body.firstName : '';
      body.lastName ? adminEntity.lastName = body.lastName : '';
      body.email ? adminEntity.email = body.email : '';
      body.status ? adminEntity.status = body.status : '';
      body.phoneNumber ? adminEntity.phoneNumber = body.phoneNumber : '';
      body.entityType ? adminEntity.entityType = body.entityType : adminEntityTypeEnum.ADMIN;
      return adminEntity
    } catch (error) {
         
      throw error
    }
  }
  /**
   * Purpose: Common function to delete Admin Entity
   * @param adminEntityId 
   * @returns 
   */
  async deleteAdminEntity(adminEntityId: string) {
    try {
      const adminEntity = await this.adminEntityRepository.fetchSingleData({ adminEntityId: adminEntityId })
      if (!adminEntity) {
        throw "AdminEntity Id does not exist."
      }
      return await this.adminEntityRepository.deleteAdminEntity({ adminEntityId: adminEntityId }).catch((error) => {
           
        throw "Error occurred while removing AdminEntity."
      })
    } catch (error) {
         
      throw error
    }
  }
}
