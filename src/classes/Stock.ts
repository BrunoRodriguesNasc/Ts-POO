import { Product } from "./Product";

export class Stock {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    removeProduct(product: Product): void {
        const index = this.products.findIndex((p) => p.getName() === product.getName());
        this.products.splice(index, 1);
    }

    updateProduct(product: Product): void {
        const index = this.products.findIndex((p) => p.getName() === product.getName());
        this.products[index] = product;
    }

    getProducts(): Product[] {
        return this.products;
    }
}