import { Injectable } from '@nestjs/common';
import { Resolver, Query } from 'type-graphql';

import { Foo } from '../types/Foo.type';
import { Bar } from '../types/Bar.type';
import { FooBar } from '../types/FooBar.type';
import { FooBarType } from '../enums/FooBarType';

@Injectable()
@Resolver(() => Foo)
export class FooResolver {
  @Query(() => [Foo])
  public async getFoos(): Promise<Foo[]> {
    return [
      new Foo({ id: '1', bar: 'bar in foo 1', foo: 'foo 1' }),
      new Foo({ id: '2', bar: 'bar in foo 2', foo: 'foo 2' }),
      new Foo({ id: '3', bar: 'bar in foo 3', foo: 'foo 3' }),
      // its not working because Foo extends Bar :-(
      // { id: '4', bar: 'plain bar 4', foo: 'plain foo 4' } as Foo,
    ];
  }
}

@Injectable()
@Resolver(() => Bar)
export class BarResolver {
  @Query(() => [Bar])
  public async getBars(): Promise<Bar[]> {
    return [
      new Bar({ id: '1', bar: 'some bar 1' }),
      new Bar({ id: '2', bar: 'some bar 2' }),
      new Foo({ id: '3', bar: 'bar in foo 3', foo: 'foo 3' }),
    ];
  }
}

@Injectable()
@Resolver(() => FooBar)
export class FooBarResolver {
  @Query(() => [FooBar])
  public async getFooBars(): Promise<FooBar[]> {
    return [
      new FooBar({ id: '1', bar: 'bar in foo 1', foo: 'foo 1' }),
      new FooBar({ id: '2', bar: 'bar in foo 2', foo: 'foo 2', type: FooBarType.One }),
      new FooBar({ id: '3', bar: 'bar in foo 3', foo: 'foo 3' }),
      // but this works fine because Foobar is base class
      { id: '4', bar: 'plain bar 4', foo: 'plain foo 4' } as FooBar,
    ];
  }
}
