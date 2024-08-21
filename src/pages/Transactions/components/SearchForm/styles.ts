import styled from "styled-components";

export const SearchFormContainer = styled.form`
  max-width: 1120px;
  margin: 2rem auto 0;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    background-color: ${(props) => props.theme.colors["gray-900"]};
    border: none;
    color: ${(props) => props.theme.colors.white};
    padding: 1rem;
    line-height: 20px;

    &::placeholder {
      color: ${(props) => props.theme.colors["gray-500"]};
    }
  }

  button {
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors["green-300"]};
    color: ${(props) => props.theme.colors["green-300"]};
    border-radius: 6px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    font-weight: bold;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme.colors["green-500"]};
      border-color: ${(props) => props.theme.colors["green-500"]};
      color: ${(props) => props.theme.colors.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }

    span {
      display: none;

      @media (width >= 640px) {
        display: unset;
      }
    }
  }
`;
