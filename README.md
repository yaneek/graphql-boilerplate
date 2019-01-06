# Graphql boilerplate

Preconfigured stack for GraphQL development:
- Typescript - nothing to say
- TypeGraphQL - create graphql schema with typescript classes decorators
- Nestjs - typescript based rich web framework + dependency injection
- Lerna - maintain monorepo for microservices

## Install

Start development:
```
yarn install
yarn bootstrap
yarn watch
```

Start server
```
cd packages/api
yarn nodemon dist/api.js
```

Graphql playground: http://localhost:3000/graphql

Example query:
```
{
  getFooBars {
    id
    foo
    bar
  }
}
```