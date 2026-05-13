import { Router } from "express";
import { generateReplyHandler } from "../controllers/replyController.js";

const router = Router();

router.post("/generate", generateReplyHandler);

export default router;
