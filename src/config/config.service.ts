import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();

class ConfigService {

  constructor(private env: { [k: string]: string | undefined }) { }

  /**
   * get value from environment varibale
   * @param key 
   * @param throwOnMissing 
   * @returns 
   */
  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  /**
   * ensure that values are existed in environment varibale
   * @param keys 
   * @returns 
   */
  public ensureValues(keys: string[]) {
    keys.forEach(k => this.getValue(k, true));
    return this;
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  /**
   * get config of postgres database
   * @returns @TypeOrmModuleOptions 
   */
  public getTypeOrmPostgresConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',

      schema: 'nns',
      keepConnectionAlive: true,

      host: this.getValue('DB_DEFAULT_HOST'),
      port: parseInt(this.getValue('DB_DEFAULT_PORT')),
      username: this.getValue('DB_DEFAULT_USERNAME'),
      password: this.getValue('DB_DEFAULT_PASSWORD'),
      database: this.getValue('DB_DEFAULT_NAME'),

      entities: [__dirname + '/**/*.entity.{ts, js}'],

      migrationsTableName: 'migration',

      migrations: ['src/migration/*.ts'],

      cli: {
        migrationsDir: 'src/migration',
      },

      ssl: this.isProduction(),
      autoLoadEntities: true
    };
  }
}

const configPostgresService = new ConfigService(process.env)
  .ensureValues([
    'DB_DEFAULT_HOST',
    'DB_DEFAULT_PORT',
    'DB_DEFAULT_USERNAME',
    'DB_DEFAULT_PASSWORD',
    'DB_DEFAULT_NAME'
  ]);

export { configPostgresService };