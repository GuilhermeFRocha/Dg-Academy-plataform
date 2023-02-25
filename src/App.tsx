import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./Context/Context";
import { client } from "./lib/apollo";
import { Router } from "./Router/index";

function App() {
  return (
    <ApolloProvider client={client}>
      <ContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ContextProvider>
    </ApolloProvider>
  );
}

export default App;
