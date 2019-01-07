import { Injectable } from '@nestjs/common';
import { Resolver, Query } from 'type-graphql';

import { Foo } from '../types/Foo.type';
import { Bar } from '../types/Bar.type';
import { FooBar } from '../types/FooBar.type';
import { FooBarRepository } from '../repositories/FooBarRepository';

@Injectable()
@Resolver(() => Foo)
export class FooResolver {
  constructor(private fooBarRepository: FooBarRepository) { }

  @Query(() => [Foo])
  public async getFoos(): Promise<Foo[]> {
    return await this.fooBarRepository.getFoos();
  }
}

@Injectable()
@Resolver(() => Bar)
export class BarResolver {
  constructor(private fooBarRepository: FooBarRepository) { }

  @Query(() => [Bar])
  public async getBars(): Promise<Bar[]> {
    return await this.fooBarRepository.getBars();
  }
}

@Injectable()
@Resolver(() => FooBar)
export class FooBarResolver {
  constructor(private fooBarRepository: FooBarRepository) { }

  @Query(() => [FooBar])
  public async getFooBars(): Promise<FooBar[]> {
    return await this.fooBarRepository.getFooBars();
  }
}
