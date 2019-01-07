import { ObjectType, Field, ID } from 'type-graphql';

import { FooBarType } from '../enums/FooBarType';

@ObjectType()
export class FooBar {
  @Field(() => ID)
  public id: string;

  @Field()
  public bar: string;

  @Field()
  public foo: string;

  @Field(() => FooBarType, { nullable: true })
  public type: FooBarType = FooBarType.Unknown;

  constructor(fields?: Partial<FooBar>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
