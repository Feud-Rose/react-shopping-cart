import { render, screen } from "@testing-library/react";
import NavBar from "../../src/components/NavBar/NavBar";


describe("NavBar Home button", () => {
    it("says Home", () => {
        render(<NavBar />);
        expect(screen.getByRole("link",{name: 'Home'}).textContent).toMatch("Home");

    });
});

describe("NavBar Store button", () => {
    it("says Store", () => {
        render(<NavBar />);
        expect(screen.getByRole("link",{name: 'Store'}).textContent).toMatch("Store");

    });
});


describe("NavBar Checkout button", () => {
    it("says Checkout", () => {
        render(<NavBar />);
        expect(screen.getByRole("link",{name: 'Checkout'}).textContent).toMatch("Checkout");

    });
});