import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TodoLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.method === 'POST' && req.path === '/todo') {
      const timestamp = new Date().toISOString();
      console.log(`${timestamp} { body: ${JSON.stringify(req.body)} }`);
    }
    next();
  }
}
