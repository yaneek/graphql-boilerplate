import { Module } from '@nestjs/common';

import { allResolvers } from './resolvers';
import { allRepositories } from './repositories';

@Module({
  providers: [...allResolvers, ...allRepositories],
})
export class APIModule { }
