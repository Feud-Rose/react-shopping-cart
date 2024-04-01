import { render, screen } from "@testing-library/react";
import NavBar from "../../src/components/NavBar/NavBar";


describe("NavBar Home button", () => {
    it("says Home", () => {
        render(<NavBar />);
        expect(screen.getByRole("link",{name: 'Home'}).textContent).toMatch("Home");

    });
});

describe("NavBar Shop button", () => {
    it("says Shop", () => {
        render(<NavBar />);
        expect(screen.getByRole("link",{name: 'Shop'}).textContent).toMatch("Shop");

    });
});


describe("NavBar Checkout button", () => {
    it("says Checkout", () => {
        render(<NavBar />);
        expect(screen.getByRole("link",{name: 'Checkout'}).textContent).toMatch("Checkout");

    });
});