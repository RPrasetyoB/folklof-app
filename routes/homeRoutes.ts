import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({
    message:
      "Folklof - The Story Teller Platform as an Innovative Educational Tool to Support the SDGs",
    copyright: "© 2023. HanCeSi Group.",
  });
});

export default router;
