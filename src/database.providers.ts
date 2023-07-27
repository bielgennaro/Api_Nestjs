import { DataSource } from 'typeorm';
import { Course } from './courses/entities/course.entitiy';
import { Tag } from './courses/entities/tag.entity';

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
        database: 'cursonestjs',
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
  database: 'cursonestjs',
  entities: [Tag, Course],
  synchronize: false,
  migrations: ['./src/migrations/*.ts'],
});
