import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { TenantModule } from './tenant/tenant.module';
import { TenantService } from './tenant/tenant.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TenantModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, TenantService, PrismaService],
})
export class AppModule { }
