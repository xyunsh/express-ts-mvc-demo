import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';

@Catch()
export class AnyExceptionFilter implements ExceptionFilter {
    catch( exception: any, host: ArgumentsHost ){

        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        response
            .status(500)
            .json({
                statusCode: 500,
                message: `It's a message from the exception filter`,
                path: request.url
            });
    }
}