import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { Coffee } from './models/coffee.model';

@Resolver(() => Coffee)
export class CoffeeResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Coffee])
  async coffee() {
    return this.prisma.coffee.findMany();
  }

  @Mutation(() => Coffee)
  async createCoffee(
    @Args('name') name: string,
    @Args('country') country: string,
    @Args('elevation') elevation: number,
    @Args('process') process: string,
    @Args('variety') variety: string,
    @Args('roaster') roaster: string,
    @Args('acidity') acidity: number,
    @Args('sweetness') sweetness: number,
    @Args('aftertaste') aftertaste: number,
    @Args('cleancup') cleancup: number,
    @Args('balance') balance: number,
    @Args('flavor') flavor: number,
    @Args('flavorText') flavorText: string,
    @Args('mousefeel') mousefeel: number,
    @Args('overall') overall: number,
    @Args('score') score: number,
    @Args('comment') comment: string,
    @Args('favorite') favorite: boolean,
  ) {
    return this.prisma.coffee.create({
      data: {
        name,
        country,
        elevation,
        process,
        variety,
        roaster,
        acidity,
        sweetness,
        aftertaste,
        cleancup,
        balance,
        flavor,
        flavorText,
        mousefeel,
        overall,
        score,
        comment,
        favorite,
      },
    });
  }
}
