import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { priceFormatter } from "@/utils/formatter";
import { useSummary } from "@/hooks/useSummary";

export const Summary = () => {
  const { summary } = useSummary();

  const formattedIncome = priceFormatter.format(summary.income);
  const formattedOutcome = priceFormatter.format(summary.outcome);
  const formattedTotal = priceFormatter.format(summary.total);

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>

          <ArrowCircleUp size={32} color="#00B37E" />
        </header>

        <strong title={formattedIncome}>{formattedIncome}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>

          <ArrowCircleDown size={32} color="#F75A68" />
        </header>

        <strong title={formattedOutcome}>{formattedOutcome}</strong>
      </SummaryCard>

      <SummaryCard $variant="green">
        <header>
          <span>Total</span>

          <CurrencyDollar size={32} />
        </header>

        <strong title={formattedTotal}>{formattedTotal}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
};
