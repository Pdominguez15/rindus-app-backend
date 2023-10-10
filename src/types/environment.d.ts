declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV: 'development' | 'production';
      PORT?: string;
      LOG_LEVEL?: string;
      DB_HOST: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      DB_PORT: string;
      SESSION_SECRET: string;
      GOOGLE_CLIENT_ID: string;
    }
  }
}

export = ProcessEnv;
