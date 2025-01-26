import { Field, InputType, Int } from "@nestjs/graphql";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, Min } from "class-validator";

@InputType()
export class UpdateTodoInput {

    @Field(() => Int)
    @IsInt()
    @Min(1)
    id: number;

    @Field(() => String, { nullable: true })
    @IsString()
    @IsNotEmpty()
    @MaxLength(15)
    @IsOptional()
    description: string;
    
    @Field(() => Boolean)
    @IsOptional()
    @IsBoolean()
    done: boolean;
}