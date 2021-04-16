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
import { IssuesModule } from './issues/issues.module';

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
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      playground: true,
    }),
    RecipeModule,
    SampleModule,
    IssuesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
