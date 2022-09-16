import { Router } from "express";
import { adsController } from "./use-cases/ads";
import { gamesController } from "./use-cases/games";

const router = Router();

router.get("/games", (req, res) => {
  return gamesController.handle(req, res);
});

router.get("/games/:id/ads", (req, res) => {
  return adsController.handle(req, res);
});

export { router };
