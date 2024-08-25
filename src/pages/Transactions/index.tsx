import { Summary } from "@/pages/Transactions/components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  RowGroup,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { CalendarBlank, TagSimple } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { dateFormatter, priceFormatter } from "@/utils/formatter";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

export const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async () => {
    const response = await api.get("/transactions");

    setTransactions(response.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <>
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td>
                  <PriceHighlight $variant={transaction.type}>
                    {transaction.type === "outcome" && "- "}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <RowGroup>
                  <div>
                    <TagSimple size={16} />
                    {transaction.category}
                  </div>
                  <div>
                    <CalendarBlank size={16} />
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </div>
                </RowGroup>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
};
