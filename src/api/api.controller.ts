import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { PyServiceService } from 'src/Services/py-service/py-service.service';

@Controller('api')
export class ApiController {
  constructor(readonly pythonService: PyServiceService) {}

  @Get('stock')
  async getStockData(@Req() req: Request, @Res() res: Response) {
    const ticker = req.headers['ticker'] as string;

    // Pass ticker to python service, await the result
    this.pythonService.runTestScript(
      'Stock/main.py',
      [ticker],
      (err, results) => {
        const data = JSON.parse(results);

        if (err) {
          return err;
        }

        res.json({ service: 'stock', data: data }).send();
      },
    );
  }

  @Get('sentiment')
  async getSentiment(@Req() req: Request, @Res() res: Response) {
    const ticker = req.header['ticker'];

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
  async getNews(@Req() req: Request, @Res() res: Response) {
    const ticker = req.body['ticker'];

    // Pass ticker to python service, await the result
    this.pythonService.runTestScript(
      'News/main.py',
      ['query', ticker],
      (err, results) => {
        res.json({ service: 'news', data: JSON.parse(results) }).send();
      },
    );

    const data = { service: 'news', ticker };

    return data;
  }
}

//
