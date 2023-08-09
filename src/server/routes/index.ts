import { Router } from "express";
import {StatusCodes} from "http-status-codes";
import { getFiancialGoalMock } from "../../mock";
import { FinancialGoalController } from "../controllers";

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

router.post("/createGoal", FinancialGoalController.create);

export { router };