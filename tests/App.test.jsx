import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App component", () => {
    it("says Hello", () => {
        render(<App />);
        expect(screen.getByRole("heading").textContent).toMatch("Hello");

    });
});