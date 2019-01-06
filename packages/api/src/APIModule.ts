import { Module } from '@nestjs/common';
import { allResolvers } from './resolvers';

@Module({
  providers: [...allResolvers],
})
export class APIModule { }
