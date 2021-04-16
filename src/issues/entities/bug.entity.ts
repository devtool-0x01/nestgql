import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './project.entity';

@ObjectType()
@Entity()
export class Bug {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column({ default: false })
  resolved: boolean;

  @Column()
  projectId: number;

  @ManyToOne((t) => Project, (p) => p.bugs)
  project: Project;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
