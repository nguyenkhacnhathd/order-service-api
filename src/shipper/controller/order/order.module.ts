import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from 'src/shipper/entities/order/order.entity';
import { OrderService } from 'src/shipper/entities/order/order.service';
import { OrderController } from './order.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
