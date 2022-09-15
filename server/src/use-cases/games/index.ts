import { PrismaGamesRepository } from "../../repositories/prisma/games-repository";
import { ListAllGamesController } from "./list-all-games-controller";
import { ListAllgamesUseCase } from "./list-all-games-use-case";

const prismaService = new PrismaGamesRepository();

const gamesService = new ListAllgamesUseCase(prismaService);

export const gamesController = new ListAllGamesController(gamesService);
