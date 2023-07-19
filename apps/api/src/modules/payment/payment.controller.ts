import { EventBusName } from '@/common/enums/event.enum';
import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { PaymentService } from './payment.service';
import { Order } from '../order/entities/order.entity';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @MessagePattern(EventBusName.CREATE_ORDER_PAYMENT)
  async createOrderPayment(@Payload() data: Order, @Ctx() context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    console.log(`${EventBusName.CREATE_ORDER_PAYMENT}: ${context.getPattern()}`, data);

    // TODO: reduce product quantity

    const payment = await this.paymentService.create({
      data: {
        order: data._id,
        paymentMethod: 'COD',
        paymentStatus: 'PENDING',
        paymentAmount: data.total,
      },
    });

    return payment;
  }
}
