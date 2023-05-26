import { Module } from '@nestjs/common';
import { AdminEntityService } from './admin-entity.service';
import { AdminEntityController } from './admin-entity.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { adminEntitySchemaName, adminEntityTableSchema } from './schema/adminEntity.schema';
import { AdminEntityRepository } from './admin-entity.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: adminEntitySchemaName, schema: adminEntityTableSchema}
    ])
  ],
  controllers: [AdminEntityController],
  providers: [AdminEntityService, AdminEntityRepository]
})
export class AdminEntityModule {}
