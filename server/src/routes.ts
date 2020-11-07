import { Request, Response, Router } from "express";
import { rebanhoController } from "./controllers/RebanhoController";
import { usersController } from "./controllers/UsersController";

export const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.status(200).json({ Server: "OK" });
});

routes.post("/rebanho", rebanhoController.create);
routes.get("/rebanhoall", rebanhoController.all);

routes.post("/user", usersController.create);
routes.get("/userall", usersController.all);
