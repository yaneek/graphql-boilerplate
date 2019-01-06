import { registerEnumType } from 'type-graphql';

import { FooBarType } from './enums/FooBarType';

export function registerApiEnums() {
  registerEnumType(FooBarType, {
    name: 'FooBarType',
    description: 'FooBarType',
  });
}
