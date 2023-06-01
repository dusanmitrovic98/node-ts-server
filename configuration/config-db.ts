import {
  DEFAULT_DB_HOST,
  DEFAULT_DB_PORT,
} from "../src/utility/constants/const-db";

export const dbConfig: Object = {
  host: process.env.DB_HOST || DEFAULT_DB_HOST,
  port: process.env.DB_PORT || DEFAULT_DB_PORT,
};
