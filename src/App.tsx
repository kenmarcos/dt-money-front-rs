import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Transactions } from "./pages/Transactions";
import { TransactionProvider } from "./contexts/TransactionContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionProvider>
        <Header />

        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  );
}

export default App;
