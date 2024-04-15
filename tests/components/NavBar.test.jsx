import { render, screen } from "@testing-library/react";
import NavBar from "../../src/components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";



describe("NavBar Home button", () => {
    it("says Home", () => {
        render(<NavBar />, {wrapper: BrowserRouter});
        expect(screen.getByRole("link",{name: 'Home'}).textContent).toMatch("Home")

    });
});

describe("NavBar Store button", () => {
    it("says Store", () => {
        render(<NavBar />, {wrapper: BrowserRouter});
        expect(screen.getByRole("link",{name: 'Store'}).textContent).toMatch("Store");

    });
});


describe("NavBar Checkout button", () => {
    it("says Checkout", () => {
        render(<NavBar />, {wrapper: BrowserRouter});
        expect(screen.getByRole("link",{name: 'Checkout'}).textContent).toMatch("Checkout");

    });
});