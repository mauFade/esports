import { IGameRepository } from "../../repositories/Game";

export class ListAllgamesUseCase {
  constructor(private gamesRepository: IGameRepository) {}

  async execute() {
    const data = await this.gamesRepository.fetchAllGames();

    return data;
  }
}
