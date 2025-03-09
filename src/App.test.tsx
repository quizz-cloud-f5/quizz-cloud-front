import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect, test } from "vitest";
import Page from "./page";

test("renders the app with the correct content", () => {
  render(<App />);

  // Verificar que los textos están presentes
  expect(screen.getByText("Data Fetching")).toBeInTheDocument();

});
