import { PrismaAdsRepository } from "../../repositories/prisma/ads-repository";
import { ListAdByDiscordController } from "./list-ad-by-discord-controller";
import { ListAdByDiscordUseCase } from "./list-ad-by-discord-use-case";

const prismaService = new PrismaAdsRepository();

const adService = new ListAdByDiscordUseCase(prismaService);

export const adByDiscordController = new ListAdByDiscordController(adService);
