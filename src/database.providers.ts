import { DataSource } from 'typeorm';
import { Course } from './courses/entities/course.entitiy';
import { Tag } from './courses/entities/tag.entity';
import { CourseRefactoringTest1690161272710 } from './migrations/1690161272710-CourseRefactoringTest';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'postgres',
        entities: [Tag, Course],
        synchronize: false,
      });

      return dataSource.initialize();
    },
  },
];

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  entities: [Tag, Course],
  synchronize: false,
  migrations: [CourseRefactoringTest1690161272710],
});
