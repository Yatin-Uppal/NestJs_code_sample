import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { adminEntityTypeEnum, statesEnum } from 'src/common/enums/common.enum';

export class CreateAdminEntityDto {
  @ApiProperty({ required: true, description: 'firstName of Admin Entity.' })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ required: true, description: 'lastName of Admin Entity.' })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ required: true, description: 'phoneNumber of Admin Entity.' })
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty({ required: true, description: 'entityType of Admin Entity.' })
  @IsNotEmpty()
  entityType: adminEntityTypeEnum;

  @ApiProperty({ required: true, description: 'email of Admin Entity.' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ required: true, description: 'status of Admin Entity.', enum: statesEnum })
  @IsNotEmpty()
  @IsEnum(statesEnum, {message: "status can only be 'CREATED', 'APPROVED', 'REJECTED', 'SUSPENDED'. "})
  status: statesEnum;
  
}
