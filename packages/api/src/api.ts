import 'reflect-metadata';
import * as express from 'express';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';

import { registerApiEnums } from './register-enum-types';
import { APIModule } from './APIModule';
import { allResolvers } from './resolvers';
import { INestApplication } from '@nestjs/common';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  let app: INestApplication;
  console.log('Register graphql enums');
  registerApiEnums();
  console.log('Build graphql schema');
  const schema = await buildSchema({
    resolvers: allResolvers,
    container: () => ({
      get: (someClass: any) => app.get(someClass),
    }),
  });
  console.log('Configure Apollo server');
  const graphqlServer = new ApolloServer({ playground: true, schema });
  const server = express();
  graphqlServer.applyMiddleware({ app: server });
  console.log('Configure Nest factory');
  app = await NestFactory.create(APIModule, new ExpressAdapter(server));

  console.log('Starting server');
  app.listen(PORT, () => {
    console.log('Server started');
  });
}

bootstrap();
