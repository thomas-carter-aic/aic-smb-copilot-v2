import { Module } from '@nestjs/common';
import { WorkflowService } from './workflow.service';
import { WorkflowController } from './workflow.controller';
import { WorkflowResolver } from './workflow.resolver';

@Module({
  providers: [WorkflowService, WorkflowResolver],
  controllers: [WorkflowController],
})
export class WorkflowModule {}
