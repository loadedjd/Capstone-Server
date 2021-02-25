import { Injectable } from '@nestjs/common';
import { Options, PythonShell } from 'python-shell';

@Injectable()
export class PyServiceService {
  runTestScript(
    script: string,
    args: string[],
    callback: (err, results) => void,
  ): void {
    let options: Options = {
      mode: 'text',
      pythonOptions: ['-u'], // get print results in real-time
      scriptPath: 'src/api/python',
      args: args,
    };

    PythonShell.run(script, options, callback);
  }
}
