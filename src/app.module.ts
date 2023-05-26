import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './providers/database/database.module';
import { HttpModule } from '@nestjs/axios';
import { AdminEntityModule } from './models/admin-entity/admin-entity.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      // envFilePath: 'config/' + `${process.env.APP.STAGE}.env`,
      // envFilePath: '.env',

      isGlobal: true,
    }),
    DatabaseModule,
    HttpModule,
    AdminEntityModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ]
})
export class AppModule {
  constructor() {
  }
}
