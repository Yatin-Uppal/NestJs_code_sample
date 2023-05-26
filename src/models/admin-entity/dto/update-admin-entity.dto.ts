import { ApiProperty } from '@nestjs/swagger';
import { CreateAdminEntityDto } from './create-admin-entity.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateAdminEntityDto extends CreateAdminEntityDto {
    @ApiProperty({ required: true, description: 'adminEntityId', format: 'uuid' })
    @IsNotEmpty()
    adminEntityId: string;
}
