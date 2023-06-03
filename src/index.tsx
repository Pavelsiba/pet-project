import { ThemeProvider } from "App/providers/ThemeProvider";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./shared/config/i18n/i18n";
import App from "./App/App";
import { ErrorBoundary } from "App/providers/ErrorBoundary";

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById("root")
);
