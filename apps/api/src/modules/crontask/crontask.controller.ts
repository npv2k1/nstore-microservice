import { Controller } from '@nestjs/common';
import { CrontaskService } from './crontask.service';

@Controller('crontask')
export class CrontaskController {
  constructor(private readonly crontaskService: CrontaskService) {}
}
