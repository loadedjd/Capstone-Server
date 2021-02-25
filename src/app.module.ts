import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PyServiceService } from './Services/py-service/py-service.service';
import { ApiController } from './api/api.controller';

@Module({
  imports: [],
  controllers: [AppController, ApiController],
  providers: [AppService, PyServiceService],
})
export class AppModule {}
