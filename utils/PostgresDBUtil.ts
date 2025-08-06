import { Client } from 'pg';
import * as fs from 'fs';
import * as path from 'path';
import { EncryptionUtil } from './EncryptionUtil';

export class PostgresDBUtil {
  private client: Client | null = null;
  private config: {
    hostname: string;
    userName: string;
    password: string;
    user: string;
    dbName: string;
    port: number;
  } | null = null;

  private encryptionUtil: EncryptionUtil = new EncryptionUtil();

  // Reads and decrypts configuration from a .properties file
  private getDBConfiguration(key: string): string {
    const propertiesFilePath = path.resolve(__dirname, '../config/keycodes.properties');
    const fileContent = fs.readFileSync(propertiesFilePath, 'utf8');
    const props: Record<string, string> = {};
    fileContent.split(/\r?\n/).forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [k, v] = trimmed.split('=');
        if (k && v) {
          props[k.trim()] = v.trim();
        }
      }
    });
    if (!(key in props)) throw new Error(`Key ${key} not found in properties.`);
    // Decrypt value if necessary
    return this.encryptionUtil.decrypt(props[key]) || '';
  }

  public setDBConnection(env: string) {
    if (env === 'qa') {
      this.config = {
        hostname: this.getDBConfiguration('dbHostNameQA'),
        userName: this.getDBConfiguration('dbUserNameQA'),
        password: this.getDBConfiguration('dbPwdQA'),
        user: this.getDBConfiguration('dbUser'),
        dbName: this.getDBConfiguration('dbName'),
        port: Number(this.getDBConfiguration('port')),
      };
    } else if (env === 'dev') {
      this.config = {
        hostname: this.getDBConfiguration('dbHostNameDEV'),
        userName: this.getDBConfiguration('dbUserNameDEV'),
        password: this.getDBConfiguration('dbPwdDEV'),
        user: this.getDBConfiguration('dbUserDEV'),
        dbName: this.getDBConfiguration('dbNameDEV'),
        port: Number(this.getDBConfiguration('portDEV')),
      };
    } else if (env === 'stage') {
      this.config = {
        hostname: this.getDBConfiguration('dbHostNameSTG'),
        userName: this.getDBConfiguration('dbUserNameSTG'),
        password: this.getDBConfiguration('dbPwdSTG'),
        user: this.getDBConfiguration('dbUserSTG'),
        dbName: this.getDBConfiguration('dbNameSTG'),
        port: Number(this.getDBConfiguration('portSTG')),
      };
    } else {
      throw new Error(`Environment ${env} configuration is not defined.`);
    }
  }

  // Connect to the DB (returns connected Client)
  public async connect(env: string): Promise<Client> {
    this.setDBConnection(env);
    if (!this.config) throw new Error('DB config not set.');
    this.client = new Client({
      host: this.config.hostname,
      port: this.config.port,
      database: this.config.dbName,
      user: this.config.userName,
      password: this.config.password,
    });

    try {
      await this.client.connect();
      console.log('Connected to the PostgreSQL server successfully.');
      return this.client;
    } catch (error) {
      console.error('Error connecting to the database:', error);
      throw error;
    }
  }

  public async isConnected(): Promise<boolean> {
  try {
    if (!this.client) throw new Error('Client is not initialized');
    await this.client.query('SELECT 1'); // simple test query
    return true;
  } catch (error) {
    console.error('DB connection test failed:', error);
    return false;
  }
}
  // Close DB connection
  public async closeDBConnection() {
    if (this.client) {
      try {
        await this.client.end();
        console.log('Database connection closed.');
      } catch (error) {
        console.error('Error closing DB connection:', error);
      }
    }
  }
}
