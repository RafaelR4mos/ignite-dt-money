import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionContext";

export function useSummary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.price;
        acc.total += acc.income;
      } else {
        acc.outcome += transaction.price;
        acc.total -= acc.outcome;
      }

      return acc;
    },
    { income: 0, outcome: 0, total: 0 }
  );

  return summary;
}
