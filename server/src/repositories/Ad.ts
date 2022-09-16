import { IListAdsDTO } from "../use-cases/ads/list-all-ads-dto";

export interface IAdsRepository {
  fetchAllAds: (data: IListAdsDTO) => Promise<any>;
}
