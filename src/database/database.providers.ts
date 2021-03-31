import { Sequelize } from 'sequelize-typescript';
import { Student } from '../students/entities/student.entity';
import { Groups } from '../students/entities/group.entity';
import { ConfigService } from '@nestjs/config';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.user'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.database'),
      });
      sequelize.addModels([Groups, Student]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
