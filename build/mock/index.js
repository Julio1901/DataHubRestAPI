"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFiancialGoalMock = void 0;
class FinancialGoal {
    constructor(name, amount, reservedAmount) {
        this.name = name;
        this.amount = amount;
        this.reservedAmount = reservedAmount;
    }
}
function getFiancialGoalMock() {
    const mockList = [
        new FinancialGoal("Car", 3000, 100),
        new FinancialGoal("Apartament", 5000, 2000),
        new FinancialGoal("House", 6000, 3000)
    ];
    return mockList;
}
exports.getFiancialGoalMock = getFiancialGoalMock;
exports.default = FinancialGoal;
