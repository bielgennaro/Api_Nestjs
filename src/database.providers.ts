import { DataSource } from 'typeorm';
import { Course } from './courses/entities/course.entitiy';
import { Tag } from './courses/entities/tag.entity';
import { CourseRefactoring1690178609224 } from './migrations/1690178609224-CourseRefactoring';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'nestjs-app',
        entities: [Tag, Course],
        synchronize: false,
      });
      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'nestjs-app',
  entities: [Tag, Course],
  synchronize: false,
  migrations: [CourseRefactoring1690178609224],
});
