import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PyServiceService } from './Services/py-service/py-service.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly pyService: PyServiceService,
  ) {}

  @Get()
  getHello(): string {
    // this.pyService.runTestScript();
    return 'Hello, World!';
  }
}
