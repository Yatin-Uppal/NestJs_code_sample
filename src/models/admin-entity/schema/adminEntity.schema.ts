import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { adminEntity } from '../../../interfaces/approvalSyncJson.interface';
import { v4 as uuid } from 'uuid';
import { adminEntityTypeEnum, statesEnum } from '../../../common/enums/common.enum';

@Schema({ timestamps: true })
export class adminEntitySchema implements adminEntity {
  @Prop({ required: true, default: uuid(), unique: true, index: true })
  adminEntityId: string;
  @Prop({ required: true })
  firstName: string;
  @Prop({ required: true })
  lastName: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  phoneNumber: string;
  @Prop({ required: true, enum: adminEntityTypeEnum })
  entityType: adminEntityTypeEnum;
  @Prop({ required: true, enum: statesEnum, default: statesEnum.CREATED })
  status: statesEnum;
}
export type AdminEntity = adminEntitySchema;
export const adminEntitySchemaName = 'admin_entity';
export const adminEntityTableSchema = SchemaFactory.createForClass(adminEntitySchema);
