import { IAdsRepository } from "../../repositories/Ad";
import { ILIstAdByDiscord } from "./list-ad-by-discord-dto";

export class ListAdByDiscordUseCase {
  constructor(private adRepository: IAdsRepository) {}

  async execute({ adId }: ILIstAdByDiscord) {
    if (!adId) {
      throw new Error("Id is required for fetching.");
    }

    const data = await this.adRepository.fetchDiscord({ adId });

    return data;
  }
}
