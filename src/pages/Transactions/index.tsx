import { Summary } from "@/pages/Transactions/components/Summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  RowGroup,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import { CalendarBlank, TagSimple } from "phosphor-react";

export const Transactions = () => {
  return (
    <>
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighlight $variant="income">R$ 17.000,00</PriceHighlight>
              </td>
              <RowGroup>
                <div>
                  <TagSimple size={16} />
                  Venda
                </div>
                <div>
                  <CalendarBlank size={16} />
                  13/04/2022
                </div>
              </RowGroup>
            </tr>

            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighlight $variant="outcome">
                  - R$ 17.0042343243423420,00
                </PriceHighlight>
              </td>
              <RowGroup>
                <div>
                  <TagSimple size={16} />
                  Venda
                </div>
                <div>
                  <CalendarBlank size={16} />
                  13/04/2022
                </div>
              </RowGroup>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
};
