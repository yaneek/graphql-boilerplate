# GraphQL microservices stack boilerplate

Preconfigured stack for GraphQL development:
- `Typescript` - nothing to say
- `TypeGraphQL` - create GraphQL schema with typescript classes decorators
- `Nestjs` - typescript based rich web framework + dependency injection
- `Lerna` - maintain monorepo for microservices
- `tslint` - validate code style
- `Husky` + `lint-staged` + `Prettier` - auto-reformat source code on commit

## Install

Requirements:
- `yarn` - we dont use npm (`npm install -g yarn`)

Install dependencies and initialize lerna:
```
yarn install
yarn bootstrap
```

## Start development

Build all microservices and watch for changes:
```
yarn watch
```

Start all microservices:
```
yarn start
```

Graphql playground: http://localhost:3000/graphql

Example query:
```
{
  getFooBars {
    id
    foo
    bar
    type
  }
}
```