import { prisma } from "../../services/prisma";
import { IGameRepository } from "../Game";

export class PrismaGamesRepository implements IGameRepository {
  async fetchAllGames() {
    const games = await prisma.game.findMany({
      include: {
        _count: true,
        ads: true,
      },
    });

    return games;
  }
}
