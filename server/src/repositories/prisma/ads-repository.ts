import { prisma } from "../../services/prisma";
import { ILIstAdByDiscord } from "../../use-cases/discord/list-ad-by-discord-dto";
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

  async fetchDiscord({ adId }: ILIstAdByDiscord) {
    const ad = await prisma.ad.findUniqueOrThrow({
      where: {
        id: adId,
      },
      select: {
        discord: true,
      },
    });

    return ad;
  }
}
