import { ILIstAdByDiscord } from "../use-cases/discord/list-ad-by-discord-dto";
import { IListAdsDTO } from "../use-cases/ads/list-all-ads-dto";

export interface IAdsRepository {
  fetchAllAds: (data: IListAdsDTO) => Promise<
    {
      weekDays: string[];
      id: string;
      gameId: string;
      name: string;
      yearsPlaying: number;
      discord: string;
      hourStart: number;
      hourEnd: number;
      useVoiceChannel: boolean;
      createdAt: Date;
    }[]
  >;

  fetchDiscord: (data: ILIstAdByDiscord) => Promise<{
    discord: string;
  }>;
}
