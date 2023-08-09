class FinancialGoalMock {
	name: string;
	amount: number;
	reservedAmount: number;

	constructor(name: string, amount: number, reservedAmount: number) {
		this.name = name;
		this.amount = amount;
		this.reservedAmount = reservedAmount;
	}

}

export function getFiancialGoalMock() : FinancialGoalMock[] {
	const mockList: FinancialGoalMock[] = [
		new FinancialGoalMock("Car", 3000, 100),
		new FinancialGoalMock("Apartament", 5000, 2000),
		new FinancialGoalMock("House", 6000, 3000)
	];

	return mockList;
}

export default FinancialGoalMock;