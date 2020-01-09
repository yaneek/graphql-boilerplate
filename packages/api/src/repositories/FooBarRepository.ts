import { Injectable } from '@nestjs/common';

import { Foo } from '../types/Foo.type';
import { Bar } from '../types/Bar.type';
import { FooBar } from '../types/FooBar.type';
import { FooBarType } from '../enums/FooBarType';

@Injectable()
export class FooBarRepository {
  public async getFoos(): Promise<Foo[]> {
    return [
      new Foo({ id: '1', bar: 'bar in foo 1', foo: 'foo 1' }),
      new Foo({ id: '2', bar: 'bar in foo 2', foo: 'foo 2' }),
      new Foo({ id: '3', bar: 'bar in foo 3', foo: 'foo 3' }),
      { id: '4', bar: 'plain bar 4', foo: 'plain foo 4' } as Foo,
    ];
  }

  public async getBars(): Promise<Bar[]> {
    return [
      new Bar({ id: '1', bar: 'some bar 1' }),
      new Bar({ id: '2', bar: 'some bar 2' }),
      new Foo({ id: '3', bar: 'bar in foo 3', foo: 'foo 3' }),
      { id: '4', bar: 'plain bar 4', foo: 'plain foo 4' } as Foo,
      { id: '5', bar: 'plain foo 5' } as Bar,
    ];
  }

  public async getFooBars(): Promise<FooBar[]> {
    return [
      new FooBar({ id: '1', bar: 'bar in foo 1', foo: 'foo 1' }),
      new FooBar({ id: '2', bar: 'bar in foo 2', foo: 'foo 2', type: FooBarType.One }),
      new FooBar({ id: '3', bar: 'bar in foo 3', foo: 'foo 3' }),
      { id: '4', bar: 'plain bar 4', foo: 'plain foo 4' } as FooBar,
    ];
  }
}
