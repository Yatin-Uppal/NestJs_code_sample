import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, PipelineStage } from 'mongoose';
import { AdminEntity, adminEntitySchemaName } from './schema/adminEntity.schema';


@Injectable()
export class AdminEntityRepository {
  constructor(@InjectModel(adminEntitySchemaName) private adminEntity: Model<AdminEntity>) {

  }

  /**
* Purpose common function to create adminEntity.
* @param data
* @returns
*/
  async create(data: object) {
    try {
      const adminEntity = await this.adminEntity.create(data).catch((err) => {
        throw err;
      });
      return adminEntity;
    } catch (error) {
        ;
      throw error;
    }
  }

  /**
   * Purpose: Common function for updating adminEntity details.
   * @param id
   * @param data
   * @returns
   */
  async update(whereCondition: object, data: object) {
    try {
      const adminEntity = await this.adminEntity.updateOne(whereCondition, data).catch((err) => {
        throw err;
      });
      return adminEntity;
    } catch (error) {
        ;
      throw error;
    }
  }

  /**
   * Purpose: Common function to fetch adminEntity by condition.
   * @param id
   * @returns
   */
  async fetchSingleData(whereCondition: object) {
    try {
      const adminEntity = await this.adminEntity.findOne(whereCondition).catch((err) => {
        throw err;
      });
      return adminEntity;
    } catch (error) {
        ;
      throw error;
    }
  }

  /**
   * Purpose: Common function to fetch adminEntities by condition.
   * @param id
   * @returns
   */
  async fetchMultipleData(whereCondition: object) {
    try {
      const adminEntity = await this.adminEntity.find(whereCondition).catch((err) => {
        throw err;
      });
      return adminEntity;
    } catch (error) {
        ;
      throw error;
    }
  }
  /**
   * Purpose: Common function to delete single adminEntity by condition
   * @param whereCondition 
   * @returns 
   */
  async deleteAdminEntity(whereCondition) {
    try {
      return await this.adminEntity.deleteOne(whereCondition).catch((error) => {
          
        throw error
      })
    } catch (error) {
        
      throw error
    }
  }
}