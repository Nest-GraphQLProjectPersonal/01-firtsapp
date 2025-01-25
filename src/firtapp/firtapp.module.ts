import { Module } from '@nestjs/common';
import { FirtappResolver } from './firtapp.resolver';

@Module({
  providers: [FirtappResolver]
})
export class FirtappModule {}
