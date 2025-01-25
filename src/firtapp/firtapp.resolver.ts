import { Args, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class FirtappResolver {

    @Query(() => String)
    firtsApp(): string {
        return 'Hello World xD!';
    }


    @Query(() => Int, { name: "randomFromZeroTo", description: 'From Zero to argument TO (default: 6)' })
    getRamdomFromZeroTo(@Args('to', {
        nullable:true, type() {
            return Int;
        },
    }) to: number = 6): number {
        return Math.floor(Math.random() * to);
    }
}
