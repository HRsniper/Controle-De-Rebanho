import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { validate } from "class-validator";

import { Rebanho } from "../entitiesModels/Rebanho";

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

      return response.status(201).json(rebanho);
    }

    return response.status(400).json(errors);
  }
}

export const rebanhoController = new RebanhoController();
