import { prisma } from "../../services/prisma";
import { IListAdsDTO } from "../../use-cases/ads/list-all-ads-dto";
import { IAdsRepository } from "../Ad";

export class PrismaAdsRepository implements IAdsRepository {
  async fetchAllAds({ gameId }: IListAdsDTO) {
    const ads = await prisma.ad.findMany({
      where: {
        gameId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(","),
      };
    });
  }
}
