import 'reflect-metadata';
import * as express from 'express';
import { buildSchema, useContainer } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { NestFactory } from '@nestjs/core';

import { registerApiEnums } from './register-enum-types';
import { APIModule } from './APIModule';
import { allResolvers } from './resolvers';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  console.log('Register graphql enums');
  registerApiEnums();
  console.log('Build graphql schema');
  const schema = await buildSchema({ resolvers: allResolvers });
  console.log('Configure Apollo server');
  const graphqlServer = new ApolloServer({ playground: true, schema });
  const server = express();
  graphqlServer.applyMiddleware({ app: server });
  console.log('Configure Nest factory');
  const app = await NestFactory.create(APIModule, server, { logger: false });

  useContainer({
    get: (someClass: any) => app.get(someClass),
  });

  console.log('Starting server');
  app.listen(PORT, () => {
    console.log('Server started');
  });
}

bootstrap();
