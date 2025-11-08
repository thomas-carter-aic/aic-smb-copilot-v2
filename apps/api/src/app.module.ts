import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { TenantModule } from './modules/tenant/tenant.module';
import { DocumentModule } from './modules/document/document.module';
import { WorkflowModule } from './modules/workflow/workflow.module';
import { CommonModule } from './modules/common/common.module';

@Module({
  imports: [
    // GraphQL (code-first OR schema-first). Here: schema-first using your docs/graphql/schema.graphql
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: [join(process.cwd(), 'docs/graphql/schema.graphql')],
      playground: true,
      installSubscriptionHandlers: true,
      sortSchema: true,
      context: ({ req, connection }) => (connection ? connection.context : { req }),
    }),

    CommonModule,
    AuthModule,
    UserModule,
    TenantModule,
    DocumentModule,
    WorkflowModule,
  ],
})
export class AppModule {}
