import { Router } from "express";
import {StatusCodes} from "http-status-codes";
import { getFiancialGoalMock } from "../../mock";

const router = Router();

router.get("/", (req, res) => {
	return res.send("Hello, World!");
});

router.post("/create", (req, res) =>{
	console.log(req.body);
	return res.status(StatusCodes.ACCEPTED).json(req.body);
});

router.get("/getGoalsMock", (req, res) =>{
	return res.status(StatusCodes.ACCEPTED).json(getFiancialGoalMock());
});

export { router };