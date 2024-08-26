import * as Dialog from "@radix-ui/react-dialog";
import {
  Close,
  Content,
  ErrorMessage,
  NewTransactionForm,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionContext } from "@/contexts/TransactionContext";
import { NumericFormat } from "react-number-format";

const createTransactionFormSchema = z.object({
  description: z.string().min(1, {
    message: "Campo obrigatório",
  }),
  price: z.number({
    required_error: "Campo obrigatório",
  }),
  category: z.string().min(1, {
    message: "Campo obrigatório",
  }),
  type: z.enum(["income", "outcome"], {
    required_error: "Selecione um tipo de transação",
  }),
});

export type CreateTransactionFormData = z.infer<
  typeof createTransactionFormSchema
>;

interface NewTransactionModalProps {
  onOpenModal: () => void;
}

export const NewTransactionModal = ({
  onOpenModal,
}: NewTransactionModalProps) => {
  const { createTransaction } = useContext(TransactionContext);

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTransactionFormData>({
    resolver: zodResolver(createTransactionFormSchema),
    defaultValues: {
      description: "",
      price: undefined,
      category: "",
      type: undefined,
    },
  });

  const handleCreateTransaction = (data: CreateTransactionFormData) => {
    const { description, price, category, type } = data;

    createTransaction({
      description,
      price,
      category,
      type,
    });

    onOpenModal();
  };

  return (
    <Dialog.Portal>
      <Overlay />

      <Content aria-describedby={undefined} onCloseAutoFocus={() => reset()}>
        <Dialog.Title>Nova Transação</Dialog.Title>

        {/* Escondendo a descrição acessível opcional */}
        <VisuallyHidden.Root asChild>
          <Dialog.Description />
        </VisuallyHidden.Root>

        <Close>
          <X size={24} />
        </Close>

        <NewTransactionForm onSubmit={handleSubmit(handleCreateTransaction)}>
          <div>
            <input
              type="text"
              placeholder="Descrição"
              {...register("description")}
              maxLength={45}
            />
            {errors.description && (
              <ErrorMessage>{errors.description.message}</ErrorMessage>
            )}
          </div>

          <div>
            <Controller
              control={control}
              name="price"
              render={({ field }) => {
                return (
                  <NumericFormat
                    displayType="input"
                    placeholder="Preço"
                    getInputRef={field.ref}
                    onValueChange={({ floatValue }) =>
                      field.onChange(floatValue)
                    }
                    prefix="R$ "
                    decimalScale={2}
                    decimalSeparator=","
                    thousandsGroupStyle="thousand"
                    thousandSeparator="."
                    fixedDecimalScale
                  />
                );
              }}
            />
            {errors.price && (
              <ErrorMessage>{errors.price.message}</ErrorMessage>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Categoria"
              {...register("category")}
              maxLength={12}
            />
            {errors.category && (
              <ErrorMessage>{errors.category.message}</ErrorMessage>
            )}
          </div>

          <div>
            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <TransactionType
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <TransactionTypeButton $variant="income" value="income">
                      <ArrowCircleUp size={24} />
                      Entrada
                    </TransactionTypeButton>

                    <TransactionTypeButton $variant="outcome" value="outcome">
                      <ArrowCircleDown size={24} />
                      Saída
                    </TransactionTypeButton>
                  </TransactionType>
                );
              }}
            />
            {errors.type && <ErrorMessage>{errors.type.message}</ErrorMessage>}
          </div>

          <button type="submit">Cadastrar</button>
        </NewTransactionForm>
      </Content>
    </Dialog.Portal>
  );
};
