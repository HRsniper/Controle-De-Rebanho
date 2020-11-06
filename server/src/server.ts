import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
// import helmet from "helmet";
// import cors from "cors";

// import "express-async-errors";

import { databaseConnection } from "./database/connection";
import { routes } from "./routes";

// config dotenv
dotenv.config({ path: __dirname + "./env" });

// conexão com banco
databaseConnection().then(() => console.log("Database connection successful"));

const app = express();

// middlewares
// app.use(cors());
// app.use(helmet());
app.use(express.json());

// rotas
app.use(routes);

app.listen(Number(process.env.PORT), String(process.env.HOST), () => {
  console.log(`Server is running in ${process.env.HOST}:${process.env.PORT}`);
});
