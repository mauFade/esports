import { Ad, Game, Prisma } from "@prisma/client";

export interface IGameRepository {
  fetchAllGames: () => Promise<
    (Game & {
      _count: Prisma.GameCountOutputType;
      ads: Ad[];
    })[]
  >;
}
