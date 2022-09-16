import { Request, Response } from "express";
import { ListAllAdsUseCase } from "./list-all-ads-use-case";

export class ListAllAdsController {
  constructor(private adsService: ListAllAdsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id }: { id: string } = Object(request["params"]);

    try {
      const data = await this.adsService.execute({
        gameId: id,
      });

      return response.status(200).send({ success: true, data });
    } catch (error) {
      return response
        .status(200)
        .send({ success: false, message: error["message"] });
    }
  }
}
