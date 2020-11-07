import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import { Users } from "../entitiesModels/Users";
import { userViews } from "../modelsViews/UsersViews";

class UsersController {
  async create(request: Request, response: Response) {
    const admin = false;

    const { name, email, password } = request.body;

    const repository = getRepository(Users);

    const validation = repository.create({ name, email, password, admin });

    const errors = await validate(validation);

    if (errors.length === 0) {
      const data = { name, email, password, admin };

      const user = repository.create(data);

      await repository.save(user);

      return response.status(201).json(userViews.render(user));
    }

    return response.status(400).json(errors);
  }

  async all(request: Request, response: Response) {
    const repository = getRepository(Users);

    const users = await repository.find();

    return response.status(200).json(userViews.renderMany(users));
  }
}

export const usersController = new UsersController();
