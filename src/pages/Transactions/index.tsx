import { Summary } from "@/pages/Transactions/components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  RowGroup,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { CalendarBlank, TagSimple } from "phosphor-react";
import { useContext } from "react";
import { dateFormatter, priceFormatter } from "@/utils/formatter";
import { TransactionContext } from "@/contexts/TransactionContext";

export const Transactions = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <>
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions?.map((transaction) => (
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
