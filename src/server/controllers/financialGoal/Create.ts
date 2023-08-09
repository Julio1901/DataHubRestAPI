import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

interface IFinancialGoal {
	name: string;
	amount: number;
	reservedAmount: number;
}

const bodyValidation: yup.Schema<IFinancialGoal>  = yup.object().shape({
	name: yup.string().required().min(3),
	amount: yup.number().required(),
	reservedAmount: yup.number().required()
});

export const create = async (req: Request<{}, {}, IFinancialGoal>, res: Response) => {
	//Essa é uma forma de tipar os dados, mas vamos usar parâmetros de tipagem na req
	// const data: IFinancialGoal = req.body;

	let validatedData: IFinancialGoal | undefined = undefined;


	//Validando dados recebidos
	try {
		await bodyValidation.validate(req.body);
	} catch (error) {
		const yupError = error as yup.ValidationError;

		return res.json({
			errors: {
				default: yupError.message
			}
		});

	}


	console.log(validatedData);

	return res.send("Create!");
};