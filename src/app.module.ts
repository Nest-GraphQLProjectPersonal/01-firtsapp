import { join } from 'path';

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { FirtappModule } from './firtapp/firtapp.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { TodoModule } from './todo/todo.module';


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false,
      plugins: [
        ApolloServerPluginLandingPageLocalDefault
      ],
    }),
    FirtappModule,
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
