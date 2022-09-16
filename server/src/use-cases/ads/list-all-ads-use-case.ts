import { IAdsRepository } from "../../repositories/Ad";
import { IListAdsDTO } from "./list-all-ads-dto";

export class ListAllAdsUseCase {
  constructor(private adsRepository: IAdsRepository) {}

  async execute({ gameId }: IListAdsDTO) {
    if (!gameId) {
      throw new Error("Game id is required.");
    }

    const data = await this.adsRepository.fetchAllAds({ gameId });

    return data;
  }
}
