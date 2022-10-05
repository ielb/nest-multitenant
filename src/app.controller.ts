import { Body, Controller, Post } from '@nestjs/common';
import { TenantService } from './tenant/tenant.service';

@Controller()
export class AppController {
  constructor(private readonly tenant: TenantService,) { }

  @Post('create-tenant')
  getHello(@Body() data: { tenant: string }) {
    return this.tenant.createTenant(data);
  }
}
