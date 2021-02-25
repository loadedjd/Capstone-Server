import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { PyServiceService } from 'src/Services/py-service/py-service.service';

@Controller('api')
export class ApiController {
  constructor(readonly pythonService: PyServiceService) {}

  @Get('stock')
  async getStockData(@Req() req: Request) {
    const ticker = req.body['ticker'];

    // Pass ticker to python service, await the result
    this.pythonService.runTestScript('Stock/main.py');

    const data = { service: 'stock', ticker };

    return data;
  }

  @Get('sentiment')
  async getSentiment(@Req() req: Request) {
    const ticker = req.body['ticker'];

    // Pass ticker to python service, await the result

    const data = { service: 'sentiment', ticker };

    return data;
  }

  @Get('news')
  async getNews(@Req() req: Request) {
    const ticker = req.body['ticker'];

    // Pass ticker to python service, await the result
    this.pythonService.runTestScript('News/main.py');

    const data = { service: 'news', ticker };

    return data;
  }
}
