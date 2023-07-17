import { Customer } from '@/modules/customer/entities/customer.entity';
import { User } from '@/modules/user/entities/user.entity';

export type AuthUser = User & Customer;
