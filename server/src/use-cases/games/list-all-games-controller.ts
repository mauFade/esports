import { Request, Response } from "express";
import { ListAllgamesUseCase } from "./list-all-games-use-case";

export class ListAllGamesController {
  constructor(private gamesService: ListAllgamesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const data = await this.gamesService.execute();

    return response.status(200).send({ success: true, data });
  }
}
