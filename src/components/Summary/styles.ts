import styled from "styled-components";

export const SummaryContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  padding: 0 1.5rem 2rem;

  max-width: 1120px;
  margin: -5rem auto 0;
  overflow-x: auto;
`;

interface SummaryCardProps {
  variant?: "green";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  padding: 1.5rem;
  border-radius: 6px;
  background-color: ${(props) =>
    props.variant === "green"
      ? props.theme.colors["green-700"]
      : props.theme.colors["gray-600"]};
  min-width: 17.5rem;

  header {
    color: ${(props) => props.theme.colors["gray-300"]};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    color: ${(props) => props.theme.colors["gray-100"]};
    font-size: 2rem;
    font-weight: bold;
  }
`;
