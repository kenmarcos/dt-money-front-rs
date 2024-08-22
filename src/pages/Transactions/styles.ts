import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 2rem auto 0;
  padding: 0 1.5rem 2rem;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  margin-top: 1.5rem;

  tr {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors["gray-700"]};
    border-radius: 6px;

    & + tr {
      margin-top: 1rem;
    }

    @media (width > 640px) {
      flex-direction: row;
      align-items: center;
    }
  }

  td {
    padding: 1.25rem 2rem;

    &:first-child {
      @media (width > 640px) {
        width: 50%;
      }
    }

    &:nth-child(2) {
      @media (width > 640px) {
        flex: 1;
      }
    }

    &:last-child {
      @media (width > 640px) {
        width: 30%;
      }
    }
  }
`;

interface PriceHighlightProps {
  $variant: "income" | "outcome";
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.$variant === "income"
      ? props.theme.colors["green-300"]
      : props.theme.colors["red-300"]};
  font-weight: bold;
  font-size: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 200px;

  @media (width > 640px) {
    font-size: 1rem;
    width: 150px;
  }
`;

export const RowGroup = styled.td`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors["gray-500"]};
  gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (width > 640px) {
      svg {
        display: none;
      }
    }
  }
`;
