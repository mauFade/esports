import { Router } from "express";
import { gamesController } from "./use-cases/games";

const router = Router();

router.get("/games", (req, res) => {
  return gamesController.handle(req, res);
});

export { router };
