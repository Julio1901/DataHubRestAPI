class FinancialGoal {
	name: string;
	amount: number;
	reservedAmount: number;

	constructor(name: string, amount: number, reservedAmount: number) {
		this.name = name;
		this.amount = amount;
		this.reservedAmount = reservedAmount;
	}

}

export function getFiancialGoalMock() : FinancialGoal[] {
	const mockList: FinancialGoal[] = [
		new FinancialGoal("Car", 3000, 100),
		new FinancialGoal("Apartament", 5000, 2000),
		new FinancialGoal("House", 6000, 3000)
	];

	return mockList;
}

export default FinancialGoal;