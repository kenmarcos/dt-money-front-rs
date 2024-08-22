import * as Dialog from "@radix-ui/react-dialog";
import {
  Close,
  Content,
  NewTransactionForm,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content aria-describedby={undefined}>
        <Dialog.Title>Nova Transação</Dialog.Title>

        {/* Escondendo a descrição acessível opcional */}
        <VisuallyHidden.Root asChild>
          <Dialog.Description />
        </VisuallyHidden.Root>

        <Close>
          <X size={24} />
        </Close>

        <NewTransactionForm>
          <input type="text" placeholder="Descrição" />
          <input type="text" placeholder="Preço" />
          <input type="text" placeholder="Categoria" />

          <TransactionType>
            <TransactionTypeButton $variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton $variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </NewTransactionForm>
      </Content>
    </Dialog.Portal>
  );
};
