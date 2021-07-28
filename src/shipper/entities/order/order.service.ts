import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Order} from './order.entity';
import {Repository} from 'typeorm';

@Injectable()
export class OrderService {
    constructor(@InjectRepository(Order) private ordersRepository: Repository<Order>) {}

    getAll(): Promise<Order[]> {
        return this.ordersRepository.find();
    }

    getOneById(id: number): Promise<Order> {
        return this.ordersRepository.findOne(id);
    }
}
