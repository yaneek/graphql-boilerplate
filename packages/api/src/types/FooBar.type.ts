import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class FooBar {
  @Field()
  public bar: string;

  @Field(() => ID)
  public id: string;

  @Field()
  public foo: string;

  constructor(fields?: Partial<FooBar>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
