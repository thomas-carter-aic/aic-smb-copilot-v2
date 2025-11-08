import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { DocumentResolver } from './document.resolver';

@Module({
  providers: [DocumentService, DocumentResolver],
  controllers: [DocumentController],
})
export class DocumentModule {}
