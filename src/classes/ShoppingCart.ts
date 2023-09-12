import { Product } from "./Product";

export class ShoppingCart {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  calcTotal(): number {
    return this.products.reduce((total, product) => total + product.getPrice() * product.getQuantity(), 0);
  }

  removeProduct(product: Product): void {
    const index = this.products.findIndex((p) => p.getName() === product.getName());
    this.products.splice(index, 1);
  }

}