import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import helmet from 'helmet';
// import compression from 'compression';
import { NestExpressApplication } from '@nestjs/platform-express';
import session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // config
  // app.use(helmet({}));
  app.enableCors({});
  app.use(
    session({
      cookie: {
        httpOnly: true,
        path: '/',
      },
      secret: 'caccccacsacascacac',
      resave: false,
      saveUninitialized: false,
    }),
  );
  // app.use(compression({}));
  app.disable('x-powered-by');
  // app.disable('X-Powered-By');

  await app.listen(3000, () => {
    console.log(`listening on http://localhost:3000`);
  });
  // const url = await app.getUrl();
}
bootstrap();
