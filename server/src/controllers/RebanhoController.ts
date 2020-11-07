import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import { Rebanho } from "../entitiesModels/Rebanho";
import { RebanhoViews } from "../modelsViews/RebanhoViews";

class RebanhoController {
  async create(request: Request, response: Response) {
    const {
      bezerros,
      bezerras,
      desmamados,
      desmamadas,
      garrotes,
      garrotas,
      novilhos,
      novilhas,
      touros,
      vacas,
      bois,
    } = request.body;

    const repository = getRepository(Rebanho);

    const validation = repository.create({
      bezerros,
      bezerras,
      desmamados,
      desmamadas,
      garrotes,
      garrotas,
      novilhos,
      novilhas,
      touros,
      vacas,
      bois,
    });

    const errors = await validate(validation);

    if (errors.length === 0) {
      const data = {
        bezerros,
        bezerras,
        desmamados,
        desmamadas,
        garrotes,
        garrotas,
        novilhos,
        novilhas,
        touros,
        vacas,
        bois,
      };

      const rebanho = repository.create(data);

      await repository.save(rebanho);

      return response.status(201).json(RebanhoViews.render(rebanho));
    }

    return response.status(400).json(errors);
  }

  async all(request: Request, response: Response) {
    const repository = getRepository(Rebanho);

    const rebanho = await repository.find();

    return response.status(200).json(RebanhoViews.renderMany(rebanho));
  }
}

export const rebanhoController = new RebanhoController();
