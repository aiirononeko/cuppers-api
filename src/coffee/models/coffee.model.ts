import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Coffee {
  @Field(() => ID)
  id: number;
  name: string;
  country: string;
  elevation: number;
  process: string;
  variety: string;
  roaster: string;
  acidity: number;
  sweetness: number;
  aftertaste: number;
  cleancup: number;
  balance: number;
  flavor: number;
  flavorText: string;
  mousefeel: number;
  overall: number;
  score: number;
  comment: string;
  favorite: boolean;
}
