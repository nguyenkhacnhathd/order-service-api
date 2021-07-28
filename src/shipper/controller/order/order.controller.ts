import {Controller, Get, Param} from '@nestjs/common';
import {OrderService} from "../../entities/order/order.service";
import {Order} from "../../entities/order/order.entity";

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Get('/')
    getOrders(): Promise<Order[]> {
        return this.orderService.getAll();
    }

    @Get(':id')
    async getOrder(@Param('id') id: number): Promise<Order> {
        return await this.orderService.getOneById(id);
    }
}
