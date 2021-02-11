import { Injectable } from '@nestjs/common';
import { Options, PythonShell } from 'python-shell';

@Injectable()
export class PyServiceService {
  runTestScript(script: string): void {
    let options: Options = {
      mode: 'json',
      pythonOptions: ['-u'], // get print results in real-time
      scriptPath: 'src/api/python',
      args: ['tsla'],
    };

    PythonShell.run(script, options, function (err, results) {
      if (err) throw err;
      // results is an array consisting of messages collected during execution
      console.log('results: %j', results);
    });
  }
}
