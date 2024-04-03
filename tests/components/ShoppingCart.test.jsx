import ShoppingCart from "../../src/components/ShoppingCart/ShoppingCart";



describe("ShoppingCart", () => {
    it("Returns Array", () => {
        console.log(ShoppingCart.getItems)
        expect(ShoppingCart.getItems).typeOf("Array")

    });
});