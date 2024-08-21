import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors["gray-900"]};
  padding: 2.5rem 0 7.625rem;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 3.125rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 117px;

    @media (width > 640px) {
      width: unset;
    }
  }
`;

export const NewTransactionButton = styled.button`
  background-color: ${(props) => props.theme.colors["green-500"]};
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  border: 0;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors["green-300"]};
    transition: background-color 0.2s;
  }
`;
