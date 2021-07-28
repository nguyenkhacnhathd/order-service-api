import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configPostgresService } from './config/config.service';
import { OrderModule } from './shipper/controller/order/order.module';
import { OrderService } from './shipper/model/order/order.service';

@Module({
  imports: [TypeOrmModule.forRoot(configPostgresService.getTypeOrmPostgresConfig()), OrderModule],
  controllers: [AppController],
  providers: [AppService, OrderService],
})
export class AppModule {}
