import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect, test } from "vitest";

test("renders the app with the correct content", () => {
  render(<App />);

  // Verificar que los textos están presentes
  expect(screen.getByText("Quizz Cloud F5")).toBeInTheDocument();
  expect(screen.getByText("In Progress")).toBeInTheDocument();
});
