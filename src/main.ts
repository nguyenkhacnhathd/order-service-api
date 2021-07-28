import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 3000

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, HOST);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
