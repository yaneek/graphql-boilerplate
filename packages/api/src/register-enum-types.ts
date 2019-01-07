import { registerEnumType } from 'type-graphql';

import { FooBarType } from './enums/FooBarType';

export function registerApiEnums() {
  // @TODO auto register all enums
  registerEnumType(FooBarType, {
    name: 'FooBarType',
    description: 'FooBarType',
  });
}
