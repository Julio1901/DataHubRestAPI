import * as  create from "./Create";


// Fazemos isso para organizar todas as nossas controllers criadas em Create dentro de uma única variável. Isso faz com que seja
// mais simples e organizado no momento da utilização

export const FinancialGoalController = {
	...create,
};