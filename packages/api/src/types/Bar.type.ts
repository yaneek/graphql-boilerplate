import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Bar {
  @Field()
  public bar: string;

  @Field(() => ID)
  public id: string;

  constructor(fields?: Partial<Bar>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
