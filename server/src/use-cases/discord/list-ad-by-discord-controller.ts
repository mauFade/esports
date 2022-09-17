import { Request, Response } from "express";
import { ListAdByDiscordUseCase } from "./list-ad-by-discord-use-case";

export class ListAdByDiscordController {
  constructor(private adService: ListAdByDiscordUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { adId }: { adId: string } = Object(request["params"]);

    try {
      const data = await this.adService.execute({
        adId,
      });

      return response.status(200).send({ success: true, data });
    } catch (error) {
      return response
        .status(400)
        .send({ success: false, message: error["message"] });
    }
  }
}
