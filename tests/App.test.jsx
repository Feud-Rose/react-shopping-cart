import { render, screen } from "@testing-library/react";
import App from "../src/App";


//Possibly look into setting this test to update it self with the current heading of the Home page
describe("App component", () => {
    it("says This is the Homepage", () => {
        render(<App />);
        expect(screen.getByRole("heading").textContent).toMatch("This is the Homepage");

    });
});