import { ObjectType, Field } from 'type-graphql';

import { Bar } from './Bar.type';

@ObjectType()
export class Foo extends Bar {
  @Field()
  public foo: string;

  constructor(fields?: Partial<Foo>) {
    super(fields);
  }
}
