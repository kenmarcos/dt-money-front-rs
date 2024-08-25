import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { TransactionContext } from "@/contexts/TransactionContext";

const searchTransactionsFormSchema = z.object({
  query: z.string(),
});

export type SearchTransactionsFormData = z.infer<
  typeof searchTransactionsFormSchema
>;

export const SearchForm = () => {
  const { fetchTransactions } = useContext(TransactionContext);

  const { register, watch, handleSubmit } = useForm<SearchTransactionsFormData>(
    {
      resolver: zodResolver(searchTransactionsFormSchema),
    }
  );

  const query = watch("query");

  const handleSearchTransactions = (data: SearchTransactionsFormData) => {
    fetchTransactions(data.query);
  };

  useEffect(() => {
    if (query === "") {
      fetchTransactions();
    }
  }, [query]);

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="search"
        placeholder="Busque por transações"
        {...register("query")}
      />

      <button>
        <MagnifyingGlass size={20} />
        <span>Buscar</span>
      </button>
    </SearchFormContainer>
  );
};
