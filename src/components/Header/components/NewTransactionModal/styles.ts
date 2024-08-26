import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${(props) => props.theme.colors["gray-800"]};
`;

export const Close = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background-color: transparent;
  border: 0;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme.colors["gray-500"]};
`;

export const NewTransactionForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    width: 100%;
    border: 0;
    border-radius: 6px;
    padding: 1rem;
    background-color: ${(props) => props.theme.colors["gray-900"]};
    color: ${(props) => props.theme.colors.white};

    &::placeholder {
      color: ${(props) => props.theme.colors["gray-500"]};
    }
  }

  button[type="submit"] {
    background-color: ${(props) => props.theme.colors["green-500"]};
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
    padding: 1rem 2rem;
    border-radius: 6px;
    border: 0;
    margin-top: 1.5rem;

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme.colors["green-300"]};
      transition: background-color 0.2s;
    }
  }
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: flex;
  gap: 1rem;
`;

interface TransactionTypeButtonProps {
  $variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  flex: 1;
  background-color: ${(props) => props.theme.colors["gray-700"]};
  color: ${(props) => props.theme.colors["gray-300"]};
  border-radius: 6px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0;

  &[data-state="unchecked"]:hover {
    background-color: ${(props) => props.theme.colors["gray-600"]};
    transition: background-color 0.2s;
  }

  &[data-state="checked"] {
    background-color: ${(props) =>
      props.$variant === "income"
        ? props.theme.colors["green-500"]
        : props.theme.colors["red-500"]};
    color: ${(props) => props.theme.colors.white};

    svg {
      color: ${(props) => props.theme.colors.white};
    }
  }

  svg {
    color: ${(props) =>
      props.$variant === "income"
        ? props.theme.colors["green-300"]
        : props.theme.colors["red-300"]};
  }
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.colors["red-500"]};
  font-weight: bold;
  font-size: 0.75rem;
  display: inline-block;
  margin-top: 0.5rem;
`;
