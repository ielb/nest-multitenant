import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { execSync } from 'child_process';


@Injectable()
export class TenantService {

    constructor(private config: ConfigService) { }


    async createTenant(data: { tenant: string }) {
        // DATABASE_HOST = localhost
        // DATABASE_PORT = 5432
        // DATABASE_USER = postgres
        // DATABASE_PASSWORD = postgres
        // DATABASE_URL = "postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_POST}/${DATABASE}"

        execSync(
            `export DATABASE_URL=postgresql://${this.config.get('DATABASE_USER')}:${this.config.get('DATABASE_PASSWORD')}@${this.config.get('DATABASE_HOST')}:${this.config.get('DATABASE_PORT')}/${data.tenant} && npx prisma migrate deploy `,
            { stdio: 'inherit' },
        );

    }




}
