import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { PyServiceService } from 'src/py-service/py-service.service';

@Controller('api')
export class ApiController {
  constructor(readonly pythonService: PyServiceService) {}

  @Get('stock')
  async getStockData(@Req() req: Request, @Res() res: Response) {
    const ticker = req.body['ticker'];

    // Pass ticker to python service, await the result
    this.pythonService.runTestScript('stock.py', [ticker], (err, results) => {
      res.json({ service: 'stock', data: JSON.parse(results) }).send();
    });
  }

  @Get('sentiment')
  async getSentiment(@Req() req: Request, @Res() res: Response) {
    const ticker = req.body['ticker'];

    // Pass ticker to python service, await the result

    this.pythonService.runTestScript(
      'discovery.py',
      [ticker],
      (err, results) => {
        if (err) {
          console.error(err);
          res.send(err);
        } else {
          console.log(results);
          res.json({ service: 'sentiment', data: JSON.parse(results) }).send();
        }
      },
    );
  }

  @Get('news')
  async getNews(@Req() req: Request) {
    const ticker = req.body['ticker'];

    // Pass ticker to python service, await the result

    const data = { service: 'news', ticker };

    return data;
  }
}