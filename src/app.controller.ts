import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { PyServiceService } from './Services/py-service/py-service.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly pyService: PyServiceService,
  ) {}

  @Get()
  getIndex(@Res() res: Response): string {
    res.sendFile('index.html', { root: 'web/build' });

    return '';
  }
}
