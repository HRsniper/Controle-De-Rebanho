import { createConnection } from "typeorm";

export const databaseConnection = () => createConnection();
