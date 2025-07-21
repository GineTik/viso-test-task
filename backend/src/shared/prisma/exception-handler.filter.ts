import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { Prisma } from './generated/prisma';
import { ERRORS } from '@/shared/constants/errors.constants';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    switch (exception.code) {
      case 'P2025':
        response.status(404).json({
          statusCode: 404,
          message: ERRORS.RESOURCE_NOT_FOUND,
        });
        break;
      default:
        response.status(500).json({
          statusCode: 500,
          message: exception.message,
        });
    }
  }
}
