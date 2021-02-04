import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PyServiceService } from './py-service/py-service.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PyServiceService],
})
export class AppModule {}
