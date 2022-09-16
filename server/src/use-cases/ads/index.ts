import { PrismaAdsRepository } from "../../repositories/prisma/ads-repository";
import { ListAllAdsController } from "./list-all-ads-controller";
import { ListAllAdsUseCase } from "./list-all-ads-use-case";

const prismaService = new PrismaAdsRepository();

const adsService = new ListAllAdsUseCase(prismaService);

export const adsController = new ListAllAdsController(adsService);
