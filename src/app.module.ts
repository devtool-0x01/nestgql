import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TestEntriesResolver } from './TestEntriesResolver';
// import { TestEntity } from './TestEntity';
import { RecipeModule } from './recipe/recipe.module';
import { SampleModule } from './sample/sample.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: './appdb.db',
      type: 'sqlite',
      synchronize: true,
      // entities: [TestEntity],
      logging: true,
      autoLoadEntities: true,
    }),
    // TypeOrmModule.forFeature([TestEntity]),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    RecipeModule,
    SampleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
