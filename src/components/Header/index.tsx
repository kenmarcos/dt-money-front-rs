import * as Dialog from "@radix-ui/react-dialog";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from "@/assets/logo.svg";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen((state) => !state);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <Dialog.Root open={isOpen} onOpenChange={handleOpenModal}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal onOpenModal={handleOpenModal} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
